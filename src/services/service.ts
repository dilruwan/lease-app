import axios from 'axios';
import conf from '../config/config.json';

export const getLeases = async () => {
    return await axios.get(`${conf.server}/leases`);
};

export const getLeaseDetails = async (id) => {
    return await axios.get(`${conf.server}/leases/${id}`);
};
