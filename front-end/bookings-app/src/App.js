import React from 'react';
import './App.css';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';

//components
import Menu from './components/Menu';
import AddRoom from './components/AddRoom'


function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path='/menu' component={() => <Menu/> } /> 
            <Route path='/addroom' component={() => <AddRoom/> } /> 
            <Redirect to = '/menu' />
        </Switch>
    </BrowserRouter>
  );
}

export default App;