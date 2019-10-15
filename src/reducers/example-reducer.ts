import { Reducer } from 'redux';
import ExampleModel from '../models/example-model';
import { ExampleType } from '../types/example-types';
import { exampleConstants } from '../constants/example-constants';

export interface ExampleState {
    loading: boolean;
    example: ExampleModel;
    error: any;
}

const initialState: ExampleState = {
    loading: false,
    example: {} as ExampleModel,
    error: undefined
}

export const exampleReducer: Reducer<ExampleState, ExampleType> = (state = initialState, action: ExampleType) => {
    switch (action.type) {
        case exampleConstants.API_CALL_BEGIN:
            return {
                ...state,
                loading: true,
                error: undefined
            }
        case exampleConstants.API_CALL_SUCCESS:
            return {
                ...state,
                loading: false,
                example: action.data
            }
        case exampleConstants.API_CALL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default: 
            return initialState;
    }
}