import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Col, Button} from 'reactstrap';


class AddClient extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'Mr.',
            name: '',
            email: '',
            phone: '',
            notes: '',
            company: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: '',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        let value = target.value;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(event) { 
        console.log("State : " + JSON.stringify(this.state));
        alert("State : " + JSON.stringify(this.state));
    }

    render (){
        console.log(this.state);
        return(
            <div className="container mt-5">
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup row>
                            <Label htmlFor="title" md={2}>Title</Label>
                            <Col md={10}>
                                <Input type="select" name="title"
                                        value={this.state.title}
                                        onChange={this.handleInputChange}>
                                    <option>Mr.</option>
                                    <option>Miss.</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="name" md={2}>Name</Label>
                            <Col md={10}>
                                <Input type="text" name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="phone" md={2}>Phone</Label>
                            <Col md={10}>
                                <Input type="tel" name="phone"
                                        value={this.state.phone}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="notes" md={2}>Notes</Label>
                            <Col md={10}>
                                <Input type="textarea" id="notes" name="notes"
                                    rows="5"
                                    value={this.state.notes}
                                    onChange={this.handleInputChange}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="company" md={2}>Company</Label>
                            <Col md={10}>
                                <Input type="text" name="company"
                                        value={this.state.company}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="address" md={2}>Address</Label>
                            <Col md={10}>
                                <Input type="text" name="address"
                                        value={this.state.address}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="city" md={2}>City</Label>
                            <Col md={10}>
                                <Input type="text" name="city"
                                        value={this.state.city}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="state" md={2}>State</Label>
                            <Col md={10}>
                                <Input type="text" name="state"
                                        value={this.state.state}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="zip" md={2}>Zip</Label>
                            <Col md={10}>
                                <Input type="text" name="zip"
                                        value={this.state.zip}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="country" md={2}>Country</Label>
                            <Col md={10}>
                                <Input type="text" name="country"
                                        value={this.state.country}
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 5, offset:2}}>
                                <Button type="submit" color="primary">
                                    Save
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }

}

export default AddClient;