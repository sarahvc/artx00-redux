import { api_service_url } from '../../config/common-paths';
import axios from 'axios';

export const getAuctionDetails = () => {
    return new Promise((resolve, reject) => {
        axios.get(api_service_url + '/auction/')
            .then( response => {
                resolve(response.data);
            }).catch((err) => {
                reject(err);
            });
    });
};