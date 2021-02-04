import React, { Component } from 'react';
import axios from 'axios';
// import { equipments } from '../../shared/equipments';

import { Table, Col, Form, FormGroup, Label,
    Button, Modal, ModalHeader, ModalBody, Input,
    InputGroup, InputGroupAddon } from 'reactstrap';

import Select from 'react-select';
import Axios from 'axios';

const options = [
    {value: true, label: 'per hour'},
    {value: false, label: 'per booking'}
]

class EquipmentsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            // equipments: equipments,
            isModalOpen: false,
            title: '',
            price: 0,
            hourlyAllowed: false,
            multiUnits: false,
            selectedType: null
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePriceTypeChnage = this.handlePriceTypeChnage.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    
    handlePriceTypeChnage = selectedType => {
        this.setState(
            {selectedType},
            () => {
                this.setState({hourlyAllowed: selectedType.value},() => console.log(this.state.hourlyAllowed))
            }
        )
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    
    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState(
            {[name]: value}, () => {
                console.log(JSON.stringify([ this.state.title, this.state.multiUnits, this.state.hourlyAllowed, this.state.price]));
            }
        );
    }

    handleSave(event) {
        this.toggleModal();
        axios.post('http://localhost:8080/api/equipments', {
            title: this.state.title,
            price: this.state.price,
            hourlyAllowed: this.state.hourlyAllowed,
            multiUnits: this.state.multiUnits
        })
        // this.props.postEquipment(this.state.title, this.state.price, this.state.hourlyAllowed, this.state.multiUnits)
        // alert("added" + this.state.title + this.state.multiUnits + this.state.hourlyAllowed + this.state.price )
        event.preventDefault();
    }

    render(){
        const { selectedType } = this.state;
        const Equipments = this.props.equipments.map((equipment) => {
            return(
                <tr key={equipment.equipId}>
                    <td>{equipment.equipId + 1}</td>
                    <td>{equipment.title}</td>
                    <td>
                        {equipment.multiUnits ? 'Yes':'No'}
                    </td>
                    <td>
                        {
                            equipment.price + (equipment.hourlyAllowed ? "$ per hour" : "$ per Booking")
                        }
                    </td>
                </tr>
            )
        })
        return(
            <div className="container mt-5">
                <div className="row mt-2">
                    <Button color="primary" onClick={this.toggleModal}>Add Equipments</Button>
                    <div className="container">
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Add more equipments</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleSave}>
                            <FormGroup >
                                <Label htmlFor="Title">Name</Label>
                                <Input type="text" name="title" id="title" 
                                        value={this.state.title}
                                        onChange={this.handleInputChange} />
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="multiUnits" md={4}>Book multiple units</Label>
                                <Col md={8}>
                                    <Input type="checkbox" name="multiUnits"
                                            value={this.state.multiUnits}
                                            onChange={this.handleInputChange}>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="price" md={4}>Price</Label>
                                <Col md={4}>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                        <Input type="number" md={4} id="price" name="price"
                                                    min={0}
                                                    value={this.state.price}
                                                    onChange={this.handleInputChange} />
                                </InputGroup>
                                </Col>
                                <Col md={4}>
                                    <Select 
                                        value={selectedType}
                                        onChange={this.handlePriceTypeChnage}
                                        options={options}
                                        />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor></Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Save</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <h1>Equipments</h1>
                    </div>
                </div>
                <div className="mt-5">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Book multiple units</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Equipments}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default EquipmentsList;