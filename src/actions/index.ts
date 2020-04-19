import { GET_LEASES, GET_LEASE_DETAILS } from '../constants/appConstant';
import { IGetLeases, IGetLeaseDetails } from "../interfaces";

export const getLeases = (bool: boolean, leases: Array<any>) => {
    const leasesActionHandler: IGetLeases = {
        type: GET_LEASES,
        isLoading: bool,
        payload: leases
    };
    return leasesActionHandler;
};

export const getLeaseDetails = (bool: boolean, leaseDetails: object) => {
    const leaseDetailsActionHandler: IGetLeaseDetails = {
        type: GET_LEASE_DETAILS,
        isLoading: bool,
        payload: leaseDetails
    };
    return leaseDetailsActionHandler;
};
