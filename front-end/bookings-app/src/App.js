import React, { useEffect, useState } from 'react';
import './App.css';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import axios from 'axios';

//components
import Menu from './components/Menu';
import AddRoom from './components/AddRoom'
import AddClient from './components/AddClientDetails'
import LayoutsList from './components/LayoutsList';
import Bookings from './components/Bookings';
import LoginForm from './components/AdminLogin/LoginForm';
 
import PrivateRoute from './components/AdminLogin/services/PrivateRoute';
import PublicRoute from './components/AdminLogin/services/PublicRoute';
import { getToken, removeUserSession, setUserSession } from './components/AdminLogin/services/Common';


function App() {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <BrowserRouter>
        <Switch>
            {/* <Route path='/adminLogin' component={()=><LoginForm/>} /> */}
            <Route path='/dashboard' component={() => <Menu/> } /> 
            <Route path='/addclient' component={()=> <AddClient/>} />
            <Route path='/layoutslist' component={()=> <LayoutsList/>} />

            <PublicRoute path="/login" component={LoginForm} />
            <PrivateRoute path="/dashboard" component={Menu} />
            <Redirect to = '/dashboard' />
        </Switch>
    </BrowserRouter>
  );
}

export default App;