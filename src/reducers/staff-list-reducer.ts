import { Reducer } from 'redux';
import { StaffListType } from '../types/staff-list-types';
import { staffListConstants } from '../constants/staff-list-constants';

export interface StaffListState {
    aloading: boolean;
    staff: Array<any>
    aerror: any;
}

const initialState: StaffListState = {
    aloading: false,
    staff: {} as Array<any>,
    aerror: undefined
}

export const staffListReducer: Reducer<StaffListState, StaffListType> = (state = initialState, action: StaffListType) => {
    switch (action.type) {
        case staffListConstants.STAFF_LIST_BEGIN:
            return {
                ...state,
                aloading: true,
                aerror: undefined
            }
        case staffListConstants.STAFF_LIST_SUCCESS:
            return {
                ...state,
                aloading: false,
                staff: action.data
            }
        case staffListConstants.STAFF_LIST_ERROR:
            return {
                ...state,
                aloading: false,
                aerror: action.error
            }
        default: 
            return initialState;
    }
}