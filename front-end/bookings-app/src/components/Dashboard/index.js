import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import { Tab, Segment, Header, Grid, Container, Divider, Statistic, Button, Item, Image, List, Placeholder } from 'semantic-ui-react';

// Calendar date picking
import DatePicker from 'react-date-picker';

import { getUser, removeUserSession } from '../AdminLogin/services/Common';

const BookingsCounter = () =>{
  const [bookings, setBookings] = 
    useState([{room:"Small Conference Room", bookedForDate:new Date(2020, 3, 25), bookedForDuration:"8-9", bookedOnDate:new Date('March 25, 2020 09:24:00'), user:"Mallory Norman"}, 
              {room:"Large Conference Room", bookedForDate:new Date(2020, 3, 17), bookedForDuration:"Morning", bookedOnDate:new Date('February 17, 2020 08:24:00'), user:"Dorothy Jacobs"}, 
              {room:"Panoramic Room", bookedForDate:new Date(2020, 8, 12), bookedForDuration:"Afternoon", bookedOnDate:new Date('January 17, 2020 01:24:00'), user:"Jason McCarty"}]);

  const [date, setDate] = useState(new Date());

  const filterByBookedOnDate = (booking)=>{
    if(booking.bookedOnDate.toLocaleDateString()===date.toLocaleDateString()) return true;
    return false;  
  }

  const filterByBookedForDate = (booking)=>{
    if(booking.bookedForDate.toLocaleDateString()===date.toLocaleDateString()) return true;
    return false;  
  }

  return(
    <Segment textAlign='center'>
      <Grid columns='equal' divided stackable>
        <Grid.Row columns='equal' stretched >
          <Grid.Column>
            <Statistic>
              <Statistic.Label>Bookings made today</Statistic.Label>
              <Statistic.Value>{bookings.filter(filterByBookedOnDate).length}</Statistic.Value>
            </Statistic>
          </Grid.Column>

          <Grid.Column>
            <Statistic>
              <Statistic.Label>Bookings for today</Statistic.Label>
                <Statistic.Value>{bookings.filter(filterByBookedForDate).length}</Statistic.Value>
            </Statistic>
          </Grid.Column>
          <Grid.Column>
            <Statistic>
              <Statistic.Label>Total bookings made</Statistic.Label>
              <Statistic.Value>{bookings.length}</Statistic.Value>
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

const DisplayReservationsOnDate = ({reservationsOnDate}) =>{
  if(reservationsOnDate) return(
    <Segment style={{ overflow: 'auto', maxHeight:'20vh' }}>
    <List as='ul'>
      {reservationsOnDate.map(booking => (
        <List.Item as='li'>
          <b>{booking.room}</b><br/>
          <i>{booking.user}</i><br/>
          {booking.bookedForDuration}<br/>
          
        </List.Item>)
        )
      }
    </List>
  </Segment>
  )
  else{
    return(<Segment style={{ overflow: 'auto', maxHeight:'20vh' }}></Segment>)
  }
}




const Reservations = ()=>{
  const [bookings, setBookings] = 
    useState([{room:"Small Conference Room", bookedForDate:new Date(2020, 3, 25), bookedForDuration:"8-9", bookedOnDate:new Date('March 25, 2020 09:24:00'), user:"Mallory Norman"}, 
              {room:"Large Conference Room", bookedForDate:new Date(2020, 3, 17), bookedForDuration:"Morning", bookedOnDate:new Date('February 17, 2020 08:24:00'), user:"Dorothy Jacobs"}, 
              {room:"Panoramic Room", bookedForDate:new Date(2020, 8, 12), bookedForDuration:"Afternoon", bookedOnDate:new Date('January 17, 2020 01:24:00'), user:"Jason McCarty"}]);

  const [date, setDate] = useState(new Date());

  const [reservationsOnDate, setReservationsOnDate] = useState([]);

  const filterByBookedForDate = (booking)=>{
    if(booking.bookedForDate.toLocaleDateString()===date.toLocaleDateString()) return true;
    return false;  
  }

  const getReservationsByDate = ()=>{
    if(date) setReservationsOnDate(bookings.filter(filterByBookedForDate));
    else{
      alert("Please enter valid date");
    }
  }

  console.log(reservationsOnDate);
  return (
    <Grid.Column>

      <Segment style={{height: '40vh'}}>
        <Header as='h3'>
          Reservations
        </Header>
        <Divider/>
        
        <Grid columns={2} stackable>
          <Grid.Column textAlign='center'>
            <DatePicker 
            value={date} 
            onChange={setDate} 
            dayPlaceholder="dd"
            monthPlaceholder="mm"
            yearPlaceholder="yyyy"
            />
          </Grid.Column >
          <Grid.Column textAlign='center'>
            <Button content='Print' icon='print' size='tiny' color='blue' 
                  onClick={getReservationsByDate}/>    
          </Grid.Column>
        </Grid>
        
        <DisplayReservationsOnDate reservationsOnDate={reservationsOnDate}/>
        
      </Segment>
    </Grid.Column>
  )

}

const QuickLinks = () => {
  

  return(
    <Grid.Column>
      <Segment style={{height: '40vh'}}>
        <Header as='h3'>
          Quick Links
        </Header>
        <Divider/>

        <List>
          <List.Item><Link to="/bookings">+ Add booking</Link></List.Item>
          <List.Item><Link to="/addroom">+ Add room</Link></List.Item>
        </List>

        <List>
          <List.Item><Link to="/bookings">View Bookings</Link></List.Item>
          <List.Item><Link to="/menu">View Rooms</Link></List.Item>
          <List.Item><Link to="/menu">Manage Equipment</Link></List.Item>
          <List.Item><Link to="/menu">Edit Booking form</Link></List.Item>
          <List.Item><Link to="/menu">Language settings</Link></List.Item>
          <List.Item><Link to="/menu">Back up your files</Link></List.Item>
        </List>

      </Segment>
    </Grid.Column>
  )
}

const DashboardInternal = () =>{

  return(
    <Container textAlign='left'>
    <Grid padded stackable>
      <Grid.Row columns='equal'>
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



const Dashboard = (props)=>{

  const user = getUser();

  const handleLogout = () => {    
    removeUserSession();
    props.history.push('/login');
  }
  return (
      <div>
      <Tab.Pane>
          <Segment textAlign='center'>
            <Header content="DASHBOARD"/>
            <Button content="Logout" onClick={handleLogout} />
          </Segment>
          <BookingsCounter/>
          <DashboardInternal/>
          <LoginStats/>
      </Tab.Pane> 
      </div>
  )
}

export default Dashboard;