import React from 'react';
import './App.css';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

//components
import Menu from './components/Menu';
import AddRoom from './components/AddRoom'
import AddClient from './components/AddClientDetails'


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/menu' component={() => <Menu/> } /> 
            <Route path='/addroom' component={() => <AddRoom/> } /> 
            <Route path='/addclient' component={()=> <AddClient/>} />
            <Redirect to = '/menu' />
        </Switch>
    </BrowserRouter>
  );
}

export default App;