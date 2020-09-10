import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Tab, Segment, Header, Icon, Button, Grid, Image, List } from 'semantic-ui-react'

const Bookings = ()=>{
return (
    <div>
    <Tab.Pane>
      <Segment>
          <Header content="BOOKINGS"/>
      </Segment>
    </Tab.Pane> 
    </div>
)
}

export default Bookings;