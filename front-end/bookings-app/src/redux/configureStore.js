import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Equipments } from './equipments';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rooms } from '../shared/rooms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            equipments: Equipments
        }),
        applyMiddleware(thunk, logger)
    )

    return store;
}