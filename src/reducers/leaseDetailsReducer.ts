import { GET_LEASE_DETAILS } from '../constants/appConstant';

const initialState = {
    isLoading: false,
    leaseDetails: {}
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LEASE_DETAILS:
            return {
                ...state,
                isLoading: action.isLoading,
                leaseDetails: action.payload
            };
        default:
            return state;
    }
}
