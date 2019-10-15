import axios from 'axios';
import ENV from 'react-native-config';

const getAllAdmins = (search? : string) => {
    const url = search? 'http://10.16.0.64:3000/api/staff/filter/'+search : 'http://10.16.0.64:3000/api/staff'
    //return axios.get(`${ENV.API_URL}/admin`)
    return axios.get(url) 
        .then(response => {
            console.log(response)
            return response;           
        })
        .catch(err => {
            if (err.response) 
                throw err.response;
            throw err;
        })
}

export const getAdmins = {
    getAllAdmins
}
