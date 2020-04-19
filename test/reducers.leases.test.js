import reducer from '../src/reducers/leasesReducer'
import { GET_LEASES } from '../src/constants/appConstant';

describe('leases reducer', () => {
    const initialState = {
        isLoading: false,
        leases: []
    };

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_LEASES', () => {
        const leases = [
            {id: "lease-a", tenant: "Alex"},
            {id: "lease-b", tenant: "Jen"},
            {id: "lease-c", tenant: "Frankie"}
        ];

        let action = {
            type: GET_LEASES,
            isLoading: true,
            payload: []
        };

        expect(
            reducer(undefined, action)
        ).toEqual({
            isLoading: true,
            leases: []
        });

        action = {
            type: GET_LEASES,
            isLoading: false,
            payload: leases
        };

        expect(
            reducer({
                isLoading: true,
                leases: []
            }, action)
        ).toEqual({
            isLoading: false,
            leases: leases
        });
    });
});