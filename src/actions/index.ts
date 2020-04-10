import { GET_LEASES, GET_LEASE_DETAILS } from '../constants/appConstant';

export const getLeases = (bool: boolean, leases: Array<any>) => {
    return {
        type: GET_LEASES,
        isLoading: bool,
        payload: leases
    }
};

export const getLeaseDetails = (bool: boolean, leaseDetails: Object) => {
    return {
        type: GET_LEASE_DETAILS,
        isLoading: bool,
        payload: leaseDetails
    }
};
