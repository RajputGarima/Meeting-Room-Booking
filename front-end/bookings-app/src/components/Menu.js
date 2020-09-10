import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Tab, Segment, Header, Icon, Button } from 'semantic-ui-react'
import Dashboard from './Dashboard/';
import Bookings from './Bookings/';
import Rooms from './Rooms/';

const panes = [
  { menuItem: {content : 'Dashboard', icon : 'dashboard'},  render: () => (<Dashboard/>)},
  { menuItem: {content: 'Bookings', icon: 'book'}, render: () => (<Bookings/>) },
  { menuItem: {content: 'Rooms', icon: 'building'}, render: () => (<Rooms/>)},
]

const Menu = () => (
    <div>
        <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes}/>
    </div>
)

export default Menu;