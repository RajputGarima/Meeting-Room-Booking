import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import { Tab, Segment, Header, Icon, Button } from 'semantic-ui-react'
import Dashboard from './Dashboard/';
import Bookings from './Bookings/';
import Rooms from './Rooms/';
import AddRoom from './AddRoom';

const panes = [
  { 
    menuItem: {
    as: NavLink,
    id: "tab1",
    content: "Dashboard",
    icon: "dashboard",
    to: "/dashboard",
    exact: true,
    key: "dashboard"
    },  
    pane : (
      <Route
            path="/dashboard"
            exact
            render={() => <Tab.Pane><Dashboard/></Tab.Pane>}
          />
    )
  },
  { 
    menuItem: {
    as: NavLink,
    id: "tab2",
    content: "Bookings",
    icon: "book",
    to: "/bookings",
    exact: true,
    key: "booking"
    },
    pane : (
      <Route
            path="/bookings"
            exact
            render={() => <Tab.Pane><Bookings/></Tab.Pane>}
          />
    )
  },
  // Note that for now the clicking on 'Rooms' takes us to addroom page
  { 
    menuItem: {
    as: NavLink,
    id: "tab3",
    content: "Rooms",
    icon: "building",
    to: "/addroom",
    exact: true,
    key: "rooms"
    },  
    pane : (
      <Route
            path="/addroom"
            exact
            render={() => <Tab.Pane><AddRoom/></Tab.Pane>}
          />
    )
  },
]


const Menu = () => (
  <Router>
  <div>
    <Switch>
      <Tab menu={{ fluid: true, vertical: true, tabular: true}} renderActiveOnly={false} activeIndex={-1} panes={panes}/>
    </Switch>
  </div>
  </Router>
)



export default Menu;