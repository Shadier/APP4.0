import { exampleAPI } from '../api/example-api';
import { Dispatch } from 'redux';
import ExampleModel from '../models/example-model';
import * as types from '../types/example-types';
import { exampleConstants } from '../constants/example-constants';

const apiCallBegin = (): types.IActionApiCall => {
    return {
        type: exampleConstants.API_CALL_BEGIN
    }
}

const apiCallSuccess = (exampleData: ExampleModel): types.IActionApiCallSuccess => {
    return {
        type: exampleConstants.API_CALL_SUCCESS,
        data: exampleData
    }
}


const apiCallError = (error: any): types.IActionApiCallError => {
    return {
        type: exampleConstants.API_CALL_ERROR,
        error: error
    }
}

export const apiCall = () => 
    (dispatch: Dispatch) => {
        dispatch(apiCallBegin());
        exampleAPI.exampleApiCall()
            .then(response => {
                dispatch(apiCallSuccess(response.data));
            })
            .catch((err) => {
                dispatch(apiCallError(err));
            });
    }