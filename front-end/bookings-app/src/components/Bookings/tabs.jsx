import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Tab, MenuItem } from 'semantic-ui-react'
<<<<<<< Updated upstream
// import RoomLayout from './roomLayout_dropdown'
// import DurationType from './duration_dropdown'
// import StatusType from './status_dropdown'
import PaymentType from './payment_dropdown'
import { Image, Rail, Segment, Grid, Step, Button, Input, Label, Checkbox, Table, Dropdown } from 'semantic-ui-react'
=======
import RoomType from './roomType_dropdown'
import RoomLayout from './roomLayout_dropdown'
import DurationType from './duration_dropdown'
import StatusType from './status_dropdown'
import PaymentType from './payment_dropdown'
import { Image, Rail, Segment, Grid, Step, Button, Input, Label, Checkbox, Table } from 'semantic-ui-react'
>>>>>>> Stashed changes
import { DatePicker, Space, Card } from 'antd';
import 'antd/dist/antd.css';
import { render } from 'react-dom';

<<<<<<< Updated upstream
const roomTypeDefinitions = [
  { key: 1, text: 'Panoramic Room', value: 1, price: 500 },
  { key: 2, text: 'Small Conference Room', value: 2, price: 300 },
  { key: 3, text: 'Large Conference Room', value: 3, price: 600 },
]

const statusDefinitions = [
  { key: 1, text: 'Pending', value: 1 },
  { key: 2, text: 'Accepted', value: 2 },
  { key: 3, text: 'Rejected', value: 3 },
]
const roomLayoutDefinitions = [
  { key: 1, text: 'Banquet Rounds', value: 1 },
  { key: 2, text: 'Classroom', value: 2 },
  { key: 3, text: 'Conference', value: 3 },
  { key: 4, text: 'Hollow Square', value: 4 },
  { key: 5, text: 'Theater', value: 5 },
  { key: 6, text: 'U-shape', value: 6 },
]

const durationDefinitions = [
  { key: 1, text: 'Duration_a', value: 1 },
  { key: 2, text: 'Duration_b', value: 2 },
  { key: 3, text: 'Duration_c', value: 3 },
]
const paymentDefinitions = [
  { key: 1, text: 'Cash', value: 1 },
  { key: 2, text: 'Debit Card', value: 2 },
  { key: 3, text: 'Credit Card', value: 3 },
  { key: 4, text: 'UPI', value: 4 },
]
=======
const roomTypeDefinitions = ['Panoramic Room','Small Conference Room','Large Conference Room']
// const roomTypeOptions = roomTypeDefinitions.map()

>>>>>>> Stashed changes

class AddBooking extends Component{
  constructor(props){
    super(props);
    this.state = {
        created_on : '',
        IP_Address : '',
        date: '',
        attendees : 1,
        room_type : '',
        room_layout: '',
        duration: '',
        status : 'Pending',
        payment_method: 'Cash',
        room_price : 1,
        equipment_price : 1,
        foodDrinks_price : 1,
        sub_total: 3,
        tax : 0.3,
        total: 3.3,
        deposit: 0.33      
        
    }
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeRoomType = this.onChangeRoomType.bind(this);
    this.onChangeRoomLayout = this.onChangeRoomLayout.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangePayment = this.onChangePayment.bind(this);
  };
 
  onChangeDate(dateString) {
    this.setState({
<<<<<<< Updated upstream
      date: dateString,
=======
      date: dateString
>>>>>>> Stashed changes
    })
    console.log(dateString);
  }
  onChangeRoomType(prop) {
    this.setState({
<<<<<<< Updated upstream
      room_type: roomTypeDefinitions[prop.value - 1].text,
      room_price: roomTypeDefinitions[prop.value - 1].price,
    })
    console.log(this);
    console.log(prop);
    // console.log(prop.price);
  }
  onChangeRoomLayout(prop) {
    this.setState({
      room_layout: roomLayoutDefinitions[prop.value - 1].text,
    })
    // console.log(prop);
  }
  onChangeDuration(prop) {
    this.setState({
      duration: durationDefinitions[prop.value - 1].text,
    })
    // console.log(prop);
  }
  onChangeStatus(prop) {
    this.setState({
      status : statusDefinitions[prop.value -1].text,
=======
      room_type: prop.text,
      room_price: prop.price,
    })
    console.log(prop.text);
    console.log(prop.price);
  }
  onChangeRoomLayout(room) {
    this.setState({
      room_layout: room
    })
    console.log(room);
  }
  onChangeDuration(prop) {
    this.setState({
      duration: prop
    })
    console.log(prop);
  }
  onChangeStatus(prop) {
    this.setState({
      status : prop
>>>>>>> Stashed changes
    })
    console.log(prop);
  }
  onChangePayment(prop) {
    this.setState({
<<<<<<< Updated upstream
      payment_method : paymentDefinitions[prop.value -1].text,
=======
      payment_method : prop
>>>>>>> Stashed changes
    })
    console.log(prop);
  }
  calculate_subtotal(){
    return this.state.room_price,this.state.equipment_price,this.state.foodDrinks_price;
  }

  render(){
    console.log(this.state)
    return(
    // [
    //   { menuItem: 'Booking Details', render: () => 
    <Tab.Pane  >
          <Segment raised> <Step.Group>  <Step>Date & Time</Step>  </Step.Group>
            <Grid columns = {2} >
              <Grid.Row >
                <Grid.Column>
                  <div>
                    <Grid columns = {2}  >
    
                      <Grid.Row >
                          <Grid.Column>  <p>Created on</p>   </Grid.Column>
                          <Grid.Column>  <p>{this.state.created_on}</p>  </Grid.Column>                 
                      </Grid.Row>
    
                      <Grid.Row >
                          <Grid.Column>  <p>IP Address</p>   </Grid.Column> 
                          <Grid.Column>  <p>{this.state.IP_Address}</p>  </Grid.Column>                
                      </Grid.Row>

                      <Grid.Row >
                          <Grid.Column>  <p>Date</p>   </Grid.Column> 
                          <Grid.Column>  <DatePicker onChange={this.onChangeDate}/> </Grid.Column>                
                      </Grid.Row>

                      <Grid.Row >
                          <Grid.Column>  <p>Attendees</p>   </Grid.Column> 
                          <Grid.Column>  <Input type="number" id="attendees" name="attendees" placeholder={1} min={1} max={100} step="1"/> </Grid.Column>                
                      </Grid.Row>
    
                      <Grid.Row >
                        <Grid.Column>  <p>Room Type</p>   </Grid.Column> 
<<<<<<< Updated upstream
                        <Grid.Column>  <Dropdown clearable options={roomTypeDefinitions} selection onChange={(event,data) =>{this.onChangeRoomType(data)}} />  </Grid.Column>                  
=======
                        <Grid.Column>  <RoomType onChange={this.onChangeRoomType}/>  </Grid.Column>                  
>>>>>>> Stashed changes
                      </Grid.Row>
              
                      <Grid.Row>
                        <Grid.Column>  <p>Room Layout</p>   </Grid.Column>
<<<<<<< Updated upstream
                        <Grid.Column>  <Dropdown clearable options={roomLayoutDefinitions} selection onChange={(event,data) =>{this.onChangeRoomLayout(data)}} />  </Grid.Column>
=======
                        <Grid.Column>  <RoomLayout onChange={this.onChangeRoomLayout}/>  </Grid.Column>
>>>>>>> Stashed changes
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Duration</p>   </Grid.Column>
<<<<<<< Updated upstream
                        <Grid.Column>  <Dropdown clearable options={durationDefinitions} selection onChange={(event,data) =>{this.durationDefinitions(data)}} />  </Grid.Column>
=======
                        <Grid.Column>  <DurationType onChange={this.onChangeDuration}/>  </Grid.Column>
>>>>>>> Stashed changes
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>     </Grid.Column>
                        <Grid.Column>  <button className = "save_button"> Save </button> <button className = "cancel_button"> Cancel </button> </Grid.Column>
                      </Grid.Row>

                
    
                    </Grid>
                  </div>
    
                </Grid.Column>
                  
                <Grid.Column>
                  <div>
                    <Grid columns = {2}>

                      <Grid.Row>
                        <Grid.Column>     </Grid.Column>
                        <Grid.Column>  <button className = "confirmation_email"> Send Confirmation Email </button> </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Status</p>   </Grid.Column>
<<<<<<< Updated upstream
                        <Grid.Column>  <Dropdown clearable options={statusDefinitions} selection onChange={(event,data) =>{this.onChangeStatus(data)}} /> </Grid.Column>
=======
                        <Grid.Column>  <StatusType onChange={this.onChangeStatus}/>  </Grid.Column>
>>>>>>> Stashed changes
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Payment Method</p>   </Grid.Column>
<<<<<<< Updated upstream
                        <Grid.Column>  <Dropdown clearable options={paymentDefinitions} selection onChange={(event,data) =>{this.paymentDefinitions(data)}} />  </Grid.Column>
=======
                        <Grid.Column>  <PaymentType onChange={this.onChangePayment}/>  </Grid.Column>
>>>>>>> Stashed changes
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Room Price</p>   </Grid.Column>
                        <Grid.Column> <Segment> <Label>$</Label> {this.state.room_price} </Segment>  </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Equipment Price</p>   </Grid.Column>
                        <Grid.Column> <Segment> <Label>$</Label> {this.state.equipment_price} </Segment>  </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Food & Drinks Price</p>   </Grid.Column>
                        <Grid.Column> <Segment> <Label>$</Label> {this.state.foodDrinks_price} </Segment>  </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Sub-total</p>   </Grid.Column>
                        <Grid.Column> <Segment> <Label>$</Label> {this.state.sub_total} </Segment>  </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Tax</p>   </Grid.Column>
                        <Grid.Column> <Segment> <Label>$</Label> {this.state.tax} </Segment>  </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>  <p>Total</p>   </Grid.Column>
                        <Grid.Column> <Segment> <Label>$</Label> {this.state.total} </Segment>  </Grid.Column>
                      </Grid.Row>
                      
                      <Grid.Row>
                        <Grid.Column>  <p>Deposit</p>   </Grid.Column>
                        <Grid.Column> <Segment> <Label>$</Label> {this.state.deposit} </Segment>  </Grid.Column>
                      </Grid.Row>

                    </Grid>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment raised> <Step.Group>  <Step>Equipment</Step>  </Step.Group>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Title</Table.HeaderCell>
                  <Table.HeaderCell>Unit(s)</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Projector & Screen</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>$99.00 per booking</Table.Cell>
                  <Table.Cell><Checkbox/></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Wifi</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>$0.00 per booking</Table.Cell>
                  <Table.Cell><Checkbox/></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Flipchart</Table.Cell>
                  <Table.Cell><Input type="number" id="flipchart" name="flipchart" placeholder={1} min={0} max={10} step="1"/> </Table.Cell>
                  <Table.Cell>$5.00 per booking</Table.Cell>
                  <Table.Cell><Checkbox/></Table.Cell>
                </Table.Row>
<<<<<<< Updated upstream

                <Table.Row>
                  <Table.Cell>Video Conferencing</Table.Cell>
                  <Table.Cell>1</Table.Cell>
                  <Table.Cell>$49.00 per booking</Table.Cell>
                  <Table.Cell><Checkbox/></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>TV</Table.Cell>
                  <Table.Cell><Input type="number" id="tv" name="tv" placeholder={1} min={0} max={10} step="1"/> </Table.Cell>
                  <Table.Cell>$9.00 per booking</Table.Cell>
                  <Table.Cell><Checkbox/></Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell>Printer</Table.Cell>
                  <Table.Cell><Input type="number" id="printer" name="printer" placeholder={1} min={0} max={10} step="1"/> </Table.Cell>
                  <Table.Cell>$2.99 per booking</Table.Cell>
                  <Table.Cell><Checkbox/></Table.Cell>
                </Table.Row>

                

              </Table.Body>

              {/* <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='1'>
                    <Menu floated='right' pagination>
=======
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='4'>
                    {/* <Menu floated='right' pagination>
>>>>>>> Stashed changes
                      <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                      </Menu.Item>
<<<<<<< Updated upstream
                    </Menu>
                    
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer> */}
              
            </Table>
            <div>
            <button className = "save_equipment"> Save </button>
            </div>
=======
                    </Menu> */}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
>>>>>>> Stashed changes

          


          </Segment>
<<<<<<< Updated upstream
      

          <Segment raised> <Step.Group>  <Step>Food & Drinks</Step>  </Step.Group>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>People</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Tea</Table.Cell>
                <Table.Cell><Input type="number" id="tea" name="tea" placeholder={1} min={0} max={10} step="1"/></Table.Cell>
                <Table.Cell>$3.00 per attendee</Table.Cell>
                <Table.Cell><Checkbox/></Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Champagne</Table.Cell>
                <Table.Cell><Input type="number" id="champagne" name="champagne" placeholder={1} min={0} max={10} step="1"/></Table.Cell>
                <Table.Cell>$9.00 per attendee</Table.Cell>
                <Table.Cell><Checkbox/></Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Nuts (mixed)</Table.Cell>
                <Table.Cell><Input type="number" id="nuts" name="nuts" placeholder={1} min={0} max={10} step="1"/> </Table.Cell>
                <Table.Cell>$15.00 per attendee</Table.Cell>
                <Table.Cell><Checkbox/></Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Mineral Water</Table.Cell>
                <Table.Cell><Input type="number" id="water" name="water" placeholder={1} min={0} max={10} step="1"/></Table.Cell>
                <Table.Cell>$5.00 per attendee</Table.Cell>
                <Table.Cell><Checkbox/></Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Coffee</Table.Cell>
                <Table.Cell><Input type="number" id="coffee" name="coffee" placeholder={1} min={0} max={10} step="1"/> </Table.Cell>
                <Table.Cell>$4.00 per attendee</Table.Cell>
                <Table.Cell><Checkbox/></Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>Chocolate Cookies</Table.Cell>
                <Table.Cell><Input type="number" id="cookies" name="cookies" placeholder={1} min={0} max={10} step="1"/> </Table.Cell>
                <Table.Cell>$3.00 per attendee</Table.Cell>
                <Table.Cell><Checkbox/></Table.Cell>
              </Table.Row>

              

            </Table.Body>
            
          </Table>
          <div>
            <button className = "save_equipment"> Save </button>
          </div>
          </Segment>
        </Tab.Pane> 
=======
      </Tab.Pane> 
>>>>>>> Stashed changes
    //   { menuItem: 'Client Details', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    // ]
    
    
    
      
    );
  }


}

// const BookingTabs = () => <Tab panes={panes} />





export default AddBooking