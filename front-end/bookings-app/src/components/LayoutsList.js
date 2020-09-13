import React, { Component, useState } from 'react';
import { layouts } from '../shared/layouts';
import { rooms } from '../shared/rooms';
import { Table, Media, Form, FormGroup, Label,
        Button, Modal, ModalHeader, ModalBody, Input } from 'reactstrap';
import Select from 'react-select';


class LayoutsList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            layouts: layouts,
            rooms: rooms,
            isModalOpen: false,
            selectedRooms: null
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSave(event) {
        this.toggleModal();
        event.preventDefault();// prevent from redirecting....using this we can see the change on the page...going to waste 4 hours of your life if not used..gg
        let roomids = this.state.selectedRooms.map((room) => room.value);
        let newlayoutid = this.state.layouts.length;
        let newlayout = {
            id: newlayoutid,
            title: this.title.value,
            image: this.image.value,
            rooms: [...roomids]
        }
        let newlayouts = [...(this.state.layouts), newlayout];
        this.setState({
            layouts: newlayouts
        })

        let newRooms = [...this.state.rooms];
        for(let roomid of newlayout.rooms){
            let newRoom = {...newRooms[roomid]};
            newRoom.layouts.push(newlayoutid);
            newRooms[roomid] = newRoom;
        }
        this.setState({
            rooms: newRooms
        })
        // console.log(this.state.rooms);
    }

    handleChange = selectedRooms => {
        this.setState({selectedRooms})
    }

    roomlist(roomarr){
        let roomslist = roomarr.map((roomid) => {
            return <p>{this.state.rooms[roomid].title}</p>
        })
        return roomslist;
    }

    render(){
        const Layouts = this.state.layouts.map((layout) => {
            let roomslist = this.roomlist(layout.rooms);
            
            return (
                <tr key={layout.id}>
                    <td>{layout.id + 1}</td>
                    <td>
                        <Media src={layout.image}
                                alt={layout.title}
                        />
                    </td>
                    <td>{layout.title}</td>
                    <td>{roomslist}</td>
                </tr>
            )
        })

        const roomdropdown = rooms.map((room) => {
            return {value: room.id, label:room.title}
        })

        const { selectedRooms } = this.state;

        return(
            <div className="container mt-5">
                <div className="row mt-2">
                    <Button color="primary" onClick={this.toggleModal}>Add Layouts</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Add more layouts</ModalHeader>
                        <ModalBody>
                                <Form onSubmit={this.handleSave}>
                                    <FormGroup>
                                        <Label htmlFor="Title">Title</Label>
                                        <Input type="text" name="title" id="title" 
                                                innerRef={((input) => this.title = input)} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label htmlFor="image">Image</Label>
                                        <Input type="file" id="image" name="image" 
                                                innerRef={(intput) => this.image = intput} />
                                    </FormGroup>
                                    <FormGroup> 
                                        <Select 
                                            value={selectedRooms}
                                            onChange = {this.handleChange}
                                            options = {roomdropdown}
                                            isMulti  />
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Save</Button>
                                </Form>
                        </ModalBody>
                    </Modal>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <h1>Layouts</h1>
                    </div>
                </div>
                <div className="mt-5">
                    <Table bordered>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Rooms</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Layouts}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default LayoutsList;