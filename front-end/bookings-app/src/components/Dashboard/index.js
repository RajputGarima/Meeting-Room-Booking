import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Tab, Segment, Header } from 'semantic-ui-react'
import Bookings from '../Bookings'

const Dashboard = ()=>{
return (
    <div>
    <Tab.Pane>
        <Segment>
        <Header content="DASHBOARD"/>
      </Segment>
    </Tab.Pane> 
    </div>
)
}

export default Dashboard;