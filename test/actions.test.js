import * as actions from '../src/actions/index'
import { GET_LEASES, GET_LEASE_DETAILS } from '../src/constants/appConstant';

describe('Actions', () => {
    it('should create an action to getLeases', () => {
        const leases = [
            {id: "lease-a", tenant: "Alex"},
            {id: "lease-b", tenant: "Jen"},
            {id: "lease-c", tenant: "Frankie"}
        ];

        const expectedAction = {
            type: GET_LEASES,
            isLoading: true,
            payload: leases
        };

        expect(actions.getLeases(true, leases)).toEqual(expectedAction);
    });

    it('should create an action to getLeaseDetails', () => {
        const leaseDetails = {
            id: "lease-b",
            end_date: "2018-07-15",
            frequency: "monthly",
            payment_day: "friday",
            rent: 820,
            start_date: "2018-02-15",
        };

        const expectedAction = {
            type: GET_LEASE_DETAILS,
            isLoading: true,
            payload: leaseDetails
        };

        expect(actions.getLeaseDetails(true, leaseDetails)).toEqual(expectedAction);
    });
})