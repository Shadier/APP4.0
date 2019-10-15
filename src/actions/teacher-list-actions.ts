import { getTeachers, searchTeacher} from '../api/providers/teacher';
import { Dispatch } from 'redux';
import * as types from '../types/teacher-list-types';
import { teacherListConstants } from '../constants/teacher-list-constants';

const getTeachersBegin = (): types.IActionTeacherListBegin => {
    return {
        type: teacherListConstants.TEACHER_LIST_BEGIN
    }
}

const getTeachersSuccess = (adminData: Array<any>): types.IActionTeacherListlSuccess => {
    return {
        type: teacherListConstants.TEACHER_LIST_SUCCESS,
        data: adminData
    }
}

const getTeachersError = (error: any): types.IActionTeacherListError => {
    return {
        type: teacherListConstants.TEACHER_LIST_ERROR,
        error: error
    }
}

export const teachers = () => 
    (dispatch: Dispatch) => {
        dispatch(getTeachersBegin());
        getTeachers.getAllTeachers()
            .then(response => {
                dispatch(getTeachersSuccess(response.data));
            })
            .catch((err) => {
                dispatch(getTeachersError(err));
            });
    }

    // search

const searchTeachersBegin = (): types.IActionTeacherSearchBegin => {
    return {
        type: teacherListConstants.TEACHER_SEARCH_BEGIN
    }
}

const searchTeachersSuccess = (adminData: Array<any>): types.IActionTeacherSearchSuccess => {
    return {
        type: teacherListConstants.TEACHER_SEARCH_SUCCESS,
        data: adminData
    }
}

const searchTeachersError = (error: any): types.IActionTeacherSearchError => {
    return {
        type: teacherListConstants.TEACHER_SEARCH_ERROR,
        error: error
    }
}

export const searchTeachers = (search: string) => 
    (dispatch: Dispatch) => {
        dispatch(searchTeachersBegin());
        searchTeacher.searchTeachers(search)
            .then(response => {
                dispatch(searchTeachersSuccess(response.data));
            })
            .catch((err) => {
                dispatch(searchTeachersError(err));
            });
    }