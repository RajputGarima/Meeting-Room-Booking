import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Tab, Segment, Header, Grid, Container, Divider, Statistic, Button, Image, List } from 'semantic-ui-react';

// Calendar date picking
import DatePicker from 'react-date-picker'

const BookingsCounter = () =>{
  return(
    <Segment textAlign='center'>
      <Grid columns='equal' padded divided>
        <Grid.Row columns='equal' stretched >
          <Grid.Column>
            <Statistic>
              <Statistic.Label>Bookings made today</Statistic.Label>
              <Statistic.Value>0</Statistic.Value>
            </Statistic>
          </Grid.Column>

          <Grid.Column>
            <Statistic>
              <Statistic.Label>Bookings for today</Statistic.Label>
              <Statistic.Value>0</Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Label>Total bookings made</Statistic.Label>
              <Statistic.Value>0</Statistic.Value>
            </Statistic>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

const DashboardInternal = () =>{

  const [date, setDate] = useState(new Date())
  return(
    <Container textAlign='left'>
    <Grid columns='equal' padded divided>
      <Grid.Row columns='equal' >
        <Grid.Column>
          <Segment>
            <Header as='h4'>
              Latest Bookings
            </Header>
            <Divider/>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>
            <Header as='h4'>
              Reservations
            </Header>
            <Divider/>
            <DatePicker value={date} onChange={setDate}/><Button icon='print'/>
          </Segment>
        </Grid.Column>
        
        <Grid.Column>
          <Segment>
            <Header as='h4'>
              Quick Links
            </Header>
            <Divider/>
            <Router>
              <List>
                <List.Item as={Link} to='/'>+ Add booking</List.Item>
                <List.Item as={Link} to='/'>+ Add room</List.Item>
              </List>

              <List>
                <List.Item as={Link} to='/'>View Bookings</List.Item>
                <List.Item as={Link} to='/'>View Rooms</List.Item>
                <List.Item as={Link} to='/'>Manage Equipment</List.Item>
                <List.Item as={Link} to='/'>Edit Booking form</List.Item>
                <List.Item as={Link} to='/'>Language settings</List.Item>
                <List.Item as={Link} to='/'>Back up your files</List.Item>
              </List>
            </Router>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
  )
}


const TimeDateStats = () =>  {
  const [currentTime, setCurrentTime] = useState((new Date()).toLocaleTimeString());
  const [currentDate, setCurrentDate] = useState((new Date()).toLocaleDateString());

  useEffect(() => {
      const timerId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
        setCurrentDate(new Date().toLocaleDateString());
      }, 1000);
      return () => {
          clearInterval(timerId);
      }
  }, [])
  
  return (
    <Segment inverted vertical>
      <Container>
          <Grid columns={2} padded>
            <Grid.Column floated='left' textAlign='left'>
              Last Logged In
            </Grid.Column>
            <Grid.Column floated='right' textAlign='right'>
              Date: {currentDate}<br/> 
              Time: {currentTime}
            </Grid.Column>
          </Grid>
      </Container>
    </Segment>
  )
}



const Dashboard = ()=>{
return (
    <div>
    <Tab.Pane>
        <Segment textAlign='center'>
          <Header content="DASHBOARD"/>
        </Segment>
        <BookingsCounter/>
        <DashboardInternal/>
        <TimeDateStats/>
    </Tab.Pane> 
    </div>
)
}

export default Dashboard;