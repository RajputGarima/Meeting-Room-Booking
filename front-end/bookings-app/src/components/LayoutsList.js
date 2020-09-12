import React, { Component } from 'react';
import { layouts } from '../shared/layouts'
import { Table, Media } from 'reactstrap';


class LayoutsList extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            layouts: layouts 
        }
    }

    roomlist(id){
        let rooms = this.state.layouts[id].rooms.map((room) => <p>{room}</p>)
        return rooms;
    }

    render(){
        const Layouts = this.state.layouts.map((layout) => {
            let rooms = this.roomlist(layout.id);
            
            const imgStyle = {
                maxHeight: 80,
                maxWidth: 80
            }
            
            return (
                <tr key={layout.id}>
                    <td>{layout.id + 1}</td>
                    <td>
                        <Media src={layout.image}
                                alt={layout.title}
                        />
                    </td>
                    <td>{layout.title}</td>
                    <td>{rooms}</td>
                </tr>
            )
        })
        return(
            <div className="container mt-5">
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