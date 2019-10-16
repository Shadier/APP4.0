import { Action } from 'redux';
import { staffListConstants } from '../constants/staff-list-constants';

export interface IActionStaffListBegin extends Action {
    type: staffListConstants.STAFF_LIST_BEGIN
}

export interface IActionStaffListlSuccess extends Action {
    type: staffListConstants.STAFF_LIST_SUCCESS,
    data: Array<any>
}

export interface IActionStaffListError extends Action {
    type: staffListConstants.STAFF_LIST_ERROR,
    error: any
}


export type StaffListType = IActionStaffListBegin | IActionStaffListlSuccess | IActionStaffListError ;