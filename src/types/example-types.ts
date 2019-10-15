import { Action } from 'redux';
import ExampleModel from '../models/example-model';
import { exampleConstants } from '../constants/example-constants';

export interface IActionApiCall extends Action {
    type: exampleConstants.API_CALL_BEGIN
}

export interface IActionApiCallSuccess extends Action {
    type: exampleConstants.API_CALL_SUCCESS,
    data: ExampleModel
}

export interface IActionApiCallError extends Action {
    type: exampleConstants.API_CALL_ERROR,
    error: any
}

export type ExampleType = IActionApiCall | IActionApiCallSuccess | IActionApiCallError;