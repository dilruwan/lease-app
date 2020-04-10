import * as actions from '../actions/index';
import axios from 'axios';
import conf from '../config/config.json';

export const getLeases = () => {
    return (dispatch) => {
        dispatch(actions.getLeases(true, []));
        return axios.get(`${conf.server}/leases`)
            .then(response => {
                dispatch(actions.getLeases(false, response.data));
            })
            .catch(error => {
                dispatch(actions.getLeases(false, []));
                throw(error);
            });
    };
};

export const getLeaseDetails = (id) => {
    return (dispatch) => {
        dispatch(actions.getLeaseDetails(true, {}));
        return axios.get(`${conf.server}/leases/${id}`)
            .then(response => {
                dispatch(actions.getLeaseDetails(false, response.data));
            })
            .catch(error => {
                dispatch(actions.getLeaseDetails(false, {}));
                throw(error);
            });
    };
};
