import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Tab, Segment, Header, Icon, Button, Grid, Image, List } from 'semantic-ui-react'

const Rooms = ()=>{
return (
    <div>
    <Tab.Pane>
      <Segment>
          <Header content="ROOMS"/>
      </Segment>
    </Tab.Pane> 
    </div>
)
}

export default Rooms;