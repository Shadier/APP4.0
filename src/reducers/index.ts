import { staffListReducer } from './staff-list-reducer'
import { combineReducers } from "redux";

export const reducers = {
    staffListReducer,
};

export const rootReducer = combineReducers(reducers);