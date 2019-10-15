import axios from 'axios';
import ENV from 'react-native-config';

const exampleApiCall = () => {
    return axios.get(`${ENV.API_URL}example`)
        .then(response => {
            return response;
        })
        .catch(err => {
            if (err.response) {
                throw err.response;
            }
            throw err;
        })
}

export const exampleAPI = {
    exampleApiCall
}