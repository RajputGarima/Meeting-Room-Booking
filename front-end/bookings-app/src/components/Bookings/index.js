import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Tab, Segment, Header, Icon, Button, Grid, Image, List } from 'semantic-ui-react'
import BookingTabs from './tabs.jsx'

const Bookings = ()=>{
return (
    <div>
    <Tab.Pane>
      <Segment>
          <Header content="BOOKINGS"/>
          <React.StrictMode>
          <BookingTabs/>
          </React.StrictMode>,
      </Segment>
    </Tab.Pane> 
    </div>
)
}

export default Bookings;