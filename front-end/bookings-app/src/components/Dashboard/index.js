import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Tab, Segment, Header, Grid, Container, Divider, Statistic, Button, Item, Image, List, Placeholder } from 'semantic-ui-react';

// Calendar date picking
import DatePicker from 'react-date-picker';

// Scroll Bar

const BookingsCounter = () =>{
  return(
    <Segment textAlign='center'>
      <Grid columns='equal' divided>
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



const LatestBookings = ()=>{
  const [bookings, setBookings] = 
    useState([{room:"Small Conference Room", bookedForDate:new Date(2020, 3, 25), bookedForDuration:"8-9", bookedOnDate:new Date('March 25, 2020 09:24:00'), user:"Mallory Norman"}, 
              {room:"Large Conference Room", bookedForDate:new Date(2020, 3, 17), bookedForDuration:"Morning", bookedOnDate:new Date('February 17, 2020 08:24:00'), user:"Dorothy Jacobs"}, 
              {room:"Panoramic Room", bookedForDate:new Date(2020, 3, 21), bookedForDuration:"Afternoon", bookedOnDate:new Date('January 17, 2020 01:24:00'), user:"Jason McCarty"}])

  bookings.sort((booking1, booking2)=> booking2.bookedOnDate - booking1.bookedOnDate)
  // Top three latest Bookings
  const latestBookings = [];
  for (let i=0; i < 3 && i < bookings.length; i++){
    latestBookings.push(bookings[i]);
  }
  console.log(latestBookings)
  return (
    <Grid.Column>
      <Segment style={{height: '40vh'}}>
        <Header as='h3'>
          Latest Bookings
        </Header>
        <Divider/>
        <List as='ul'>
          {latestBookings.map(booking => (
            <List.Item as='li'>
              <b>{booking.room}</b><br/>
              {booking.bookedForDate.toLocaleDateString()}<br/>
              <i>{booking.user}</i>
            </List.Item>)
            )
          }
        </List>
    
      </Segment>
    </Grid.Column>
  );
}


const Reservations = ()=>{
  const [date, setDate] = useState();
  <GetReservations date/>
  const getReservations = null;
  return (
    <Grid.Column>
      <Segment style={{height: '40vh'}}>
        <Header as='h3'>
          Reservations
        </Header>
        <Divider/>
        
        <DatePicker 
          value={date} 
          onChange={setDate} 
          dayPlaceholder="dd"
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
        />
        
        <Button content='Print' icon='print' floated='right' size='tiny' color='blue'/>

        <Segment style={{ overflow: 'auto', maxHeight:'30vh' }}>
          <List as='ul'>
            {/* {bookingForDate.map(booking => (<List.Item as='li'>
                                              <b>{booking.room}</b><br/>
                                              {booking.bookedForDate.toLocaleDateString()}<br/>
                                              <i>{booking.user}</i>
                                            </List.Item>))} */}
          </List>
        </Segment>
        
      </Segment>
    </Grid.Column>
  )

}

const QuickLinks = () => (
  <Grid.Column>
    <Segment style={{height: '40vh'}}>
      <Header as='h3'>
        Quick Links
      </Header>
      <Divider/>
      <Router>
        <List>
          <List.Item as={Link} to={'/'}>+ Add booking</List.Item>
          <List.Item as={Link} to={'/addroom'}>+ Add room</List.Item>
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
)
const DashboardInternal = () =>{

  return(
    <Container textAlign='left'>
    <Grid divided padded>
      <Grid.Row columns='equal' >
        <LatestBookings/>
        <Reservations/>
        <QuickLinks/>
      </Grid.Row>
    </Grid>
    </Container>
  )
}


const LoginStats = () =>  {
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
          <Grid columns={2}>
            <Grid.Column floated='left' textAlign='left'>
              Last Logged In
            </Grid.Column>
            <Grid.Column floated='right' textAlign='right'>
              {currentTime}<br/>
              <small>{currentDate}</small>
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
        <LoginStats/>
    </Tab.Pane> 
    </div>
)
}

export default Dashboard;