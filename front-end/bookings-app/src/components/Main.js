import React, { Component } from 'react';
import {Switch, Route, Redirect, BrowserRouter, withRouter} from 'react-router-dom';

//components
import Menu from './Menu';
import AddClient from './AddClientDetails'

 
import PrivateRoute from './AdminLogin/services/PrivateRoute';

import LayoutsList from './Layouts';
import EquipmentList from './Equipments';

import { connect } from 'react-redux';
import { addEquipment, fetchEquipments, postEquipments} from '../redux/ActionCreators';

const mapStateToProps = state =>{
  return{
      equipments: state.equipments
  }
}

const mapDispatchToProps = distpatch => ({
    addEquipment:(title, price, hourlyAllowed, multiUnits) => {distpatch(addEquipment(title, price, hourlyAllowed, multiUnits)) },
    fetchEquipments: () => { distpatch(fetchEquipments()) },
    postEquipments: (title, price, hourlyAllowed,multiUnits) => {distpatch(postEquipments(title, price, hourlyAllowed, multiUnits))}
});

class Main extends Component{
  
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchEquipments();
    }

    render(){
        return (
                <Switch>
                    <Route path='/dashboard' component={() => <Menu/> } /> 
                    <Route path='/addclient' component={()=> <AddClient/>} />
                    <Route path='/layoutslist' component={()=> <LayoutsList/>} />
                    <PrivateRoute path="/dashboard" component={Menu} />
                    <Route path='/equipmentslist' component={()=> <EquipmentList equipments={this.props.equipments} addEquipment={this.props.addEquipment} postEquipments={this.props.postEquipments} />} />
                    <Redirect to = '/dashboard' />
                </Switch>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));