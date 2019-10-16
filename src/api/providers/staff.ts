import axios from 'axios';
import ENV from 'react-native-config';
const dev = ENV.DEV
const getAllStaff = (search?: string) => {
    const API_URL = dev? ENV.API_URL :  'http://10.16.0.63:3000/api/'
    const url = search ? API_URL+'staff/filter/' + search : API_URL+'staff'
    return axios.get(url)
        .then(response => {
            return response;
        })
        .catch(err => {
            if (err.response)
                throw err.response;
            throw err;
        })
}

export const getStaff = {
    getAllStaff
}
