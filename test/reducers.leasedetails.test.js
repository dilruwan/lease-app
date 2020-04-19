import reducer from '../src/reducers/leaseDetailsReducer'
import { GET_LEASE_DETAILS } from '../src/constants/appConstant';

describe('lease details reducer', () => {
    const initialState = {
        isLoading: false,
        leaseDetails: {}
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_LEASE_DETAILS', () => {
        const leaseDetails = {
            id: "lease-b",
            end_date: "2018-07-15",
            frequency: "monthly",
            payment_day: "friday",
            rent: 820,
            start_date: "2018-02-15",
        };

        let action = {
            type: GET_LEASE_DETAILS,
            isLoading: true,
            payload: {}
        };

        expect(
            reducer(undefined, action)
        ).toEqual({
            isLoading: true,
            leaseDetails: {}
        });

        action = {
            type: "GET_LEASE_DETAILS",
            isLoading: false,
            payload: leaseDetails
        };

        expect(
            reducer({
                isLoading: true,
                leaseDetails: {}
            }, action)
        ).toEqual({
            isLoading: false,
            leaseDetails: leaseDetails
        });
    });
});