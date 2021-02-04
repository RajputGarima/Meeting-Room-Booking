import * as ActionTypes from './ActionTypes';
import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/'

export const addEquipment = (title, price, hourlyAllowed, multiUnits) => ({
    type: ActionTypes.ADD_EQUIPMENT,
    payload: {
        title: title,
        price: price,
        hourlyAllowed: hourlyAllowed,
        multiUnits: multiUnits
    }
});

export const addEquipments = (equipments) => ({
    type: ActionTypes.ADD_EQUIPMENTS,
    payload: equipments
})

export function fetchEquipments(){
    return function(dispatch){
        axios.get('http://localhost:8080/api/equipments')
            .then((response) => dispatch(addEquipments(response.data)))
            .catch((response) => console.log("error"))
    }
} 

export function postEquipments(title, price, hourlyAllowed, multiUnits){
    return function(dispatch){
        const newEquipment = {
            title: title,
            price: price,
            hourlyAllowed: hourlyAllowed,
            multiUnits: multiUnits
        }
        axios.post(baseUrl + 'equipments')
            .then((response) => dispatch(addEquipment(response.data)))
    }
}

// export function postEquipments(title, price, hourlyAllowed, multiUnits){
//     return function(dispatch){
//         const newEquipment = {
//             title: title,
//             price: price,
//             hourlyAllowed: hourlyAllowed,
//             multiUnits: multiUnits
//         }
//         axios({
//             headers: { 
//                 'content-type': 'application/json'
//             },
//             method: 'post',
//             url: baseUrl + 'equipments',
//             params: newEquipment
//         })
//         .then((response) => dispatch(addEquipment(response.data)))
//     }
// }
