// page 5 

import React, { Component } from 'react';



class AddRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            image : '',
            capacity : '',
            description : '',
            book_for : '',
            price_per_hour : 0,
            price_per_day : 0,
            layouts : [],
            status : true
        }
    }

    render(){
        return(
            <div className="container">
                <h1>addroom</h1>
            </div>
        )
    }
}

export default AddRoom;