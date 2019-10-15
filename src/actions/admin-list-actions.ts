import { getAdmins } from '../api/providers/admin';
import { Dispatch } from 'redux';
import * as types from '../types/admin-list-types';
import { adminListConstants } from '../constants/admin-list-constants';

const getAdminsBegin = (): types.IActionAdminListBegin => {
    return {
        type: adminListConstants.ADMIN_LIST_BEGIN
    }
}

const getAdminsSuccess = (adminData: Array<any>): types.IActionAdminListlSuccess => {
    return {
        type: adminListConstants.ADMIN_LIST_SUCCESS,
        data: adminData
    }
}

const getAdminsError = (error: any): types.IActionAdminListError => {
    return {
        type: adminListConstants.ADMIN_LIST_ERROR,
        error: error
    }
}

export const admins = (search? : string) => 
    (dispatch: Dispatch) => {
        dispatch(getAdminsBegin());
        getAdmins.getAllAdmins(search)
            .then(response => {
                dispatch(getAdminsSuccess(response.data));
            })
            .catch((err) => {
                dispatch(getAdminsError(err));
            });
    }

