import { equipments } from '../shared/equipments';
import * as ActionTypes from './ActionTypes';

export const Equipments = (state = [] , action) => {
    switch(action.type){
        case ActionTypes.ADD_EQUIPMENTS:
            return action.payload
        case ActionTypes.ADD_EQUIPMENT:
            var layout  = action.payload;
            layout.id = state.length;
            return state.concat(layout)
        default:
            return state;
    }
}