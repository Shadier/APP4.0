import { getStaff } from '../api/providers/staff';
import { Dispatch } from 'redux';
import * as types from '../types/staff-list-types';
import { staffListConstants } from '../constants/staff-list-constants';

const getStaffBegin = (): types.IActionStaffListBegin => {
    return {
        type: staffListConstants.STAFF_LIST_BEGIN
    }
}

const getStaffSuccess = (staffData: Array<any>): types.IActionStaffListlSuccess => {
    return {
        type: staffListConstants.STAFF_LIST_SUCCESS,
        data: staffData
    }
}

const getStaffError = (error: any): types.IActionStaffListError => {
    return {
        type: staffListConstants.STAFF_LIST_ERROR,
        error: error
    }
}

export const staff = (search?: string) =>
    (dispatch: Dispatch) => {
        dispatch(getStaffBegin());
        getStaff.getAllStaff(search)
            .then(response => {
                dispatch(getStaffSuccess(response.data));
            })
            .catch((err) => {
                dispatch(getStaffError(err));
            });
    }

