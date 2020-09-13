// page 5 
import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Col, InputGroupAddon, InputGroup, Button} from 'reactstrap';
import Select from 'react-select';
import { layouts } from '../shared/layouts'

class AddRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            image : null,
            capacity : 0,
            description : '',
            bookfor : {
                        multipledays: false,
                        halfday: false,
                        hour: false
                    },
            price_per_hour : 0,
            price_per_day : 0,
            layouttype : null,   
            status : 'Active',

            layouts: layouts,
            selectedLayout: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updatePricePerHour = this.updatePricePerHour.bind(this);
    }

    handleLayoutChange = selectedLayout => {
        this.setState({selectedLayout})
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        let value;
        if(target.type === 'checkbox'){
            value = target.checked;
            const changebookfor = {...this.state.bookfor, [name] :value}
            this.setState({
                bookfor : changebookfor
            })
            return;
        }
        else if(target.type === 'image'){
            value = target.files[0];
        }
        else{
            value = target.value;
        }

        this.setState({
            [name] : value
        });
    }

    updatePricePerHour(){                                // updating after submit action, why?
        this.setState(
            {price_per_hour: 0},
            () => console.log(this.state.price_per_hour)
        )
        console.log(this.state.price_per_hour)
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.bookfor.hour === false){
            this.setState({price_per_hour:0})
        }
        console.log("State : " + JSON.stringify(this.state));
        alert("State : " + JSON.stringify(this.state));
    }

    render(){
        console.log(this.state)

        const { selectedLayout } = this.state;
        const layoutdropdown = this.state.layouts.map((layout) => { 
            return {value: layout.id, label:layout.title}
        })
        // only read when price_per_hour is selected 
        const Price_Per_hour = () => {
            if(this.state.bookfor.hour === true){

                return(
                    <FormGroup row>
                    <Label htmlFor="price_per_hour" md={2}>Price per hour</Label>
                    <Col md={4}>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                    <Input type="number" md={4} id="price_per_hour" name="price_per_hour"
                                min={0} step={10}
                                value={this.state.price_per_hour}
                                onChange={this.handleInputChange} />
                    </InputGroup>
                    </Col>
                </FormGroup>
            )
            }
            else{
                // this.updatePricePerHour()
                return(
                    <div></div>
                )
            }
        }

        return(
            <div className="container mt-5">
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="title" md={2}>Title</Label>
                            <Col md={10}>
                                <Input type="text" name="title"
                                        value={this.state.title}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="image" md={2}>Image</Label>
                            <Col md={10}>
                                <Input type="file" id="image" name="image"
                                        onChange = {this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor='capacity' md={2}>Capacity</Label>
                            <Col md={10}>
                                <Input type="number" id="capacity" name="capacity"
                                placeholder={this.state.capacity}
                                min={0} max={100} step="5" 
                                onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="description" md={2}>Description</Label>
                            <Col md={10}>
                                <Input type="textarea" id="description" name="description"
                                    rows="12"
                                    value={this.state.description}
                                    onChange={this.handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="bookFor" md={2}>Book for</Label>
                            <Col md={{size: 3, offset:1}}>
                                <Input type="checkbox" md={3}
                                        name="multipledays"
                                        onChange={this.handleInputChange} />Multiple days
                            </Col>
                            <Col md={3}>
                                <Input type="checkbox" md={3}
                                        name="halfday"
                                        onChange={this.handleInputChange}/>Half-day
                            </Col>
                            <Col md={3}>
                                <Input type="checkbox" md={3}
                                        name="hour"
                                        onChange={this.handleInputChange}/>Hour 
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="price_per_day" md={2}>Price per day</Label>
                            <Col md={4}>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                <Input type="number" md={4} id="price_per_day" name="price_per_day"
                                            min={0} step={10}
                                            value={this.state.price_per_day}
                                            onChange={this.handleInputChange} />
                            </InputGroup>
                            </Col>
                        </FormGroup>

                        <Price_Per_hour/>   
                        
                        <FormGroup row>
                            <Label htmlFor="layouts" md={2}>Layouts</Label>
                            <Col md={10}>
                            <Select 
                                value={selectedLayout}
                                onChange={this.handleLayoutChange}
                                options={layoutdropdown}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="status" md={2}>Status</Label> 
                            <Col md={10}>
                            <Input type="select" name="status"
                                    value={this.state.status}
                                    onChange={this.handleInputChange}>
                                <option>Active</option>
                                <option>Inactive</option>
                            </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 5, offset:2}}>
                                <Button type="submit" color="primary">
                                    Add Room
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default AddRoom;