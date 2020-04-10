import { GET_LEASES } from '../constants/appConstant';

const initialState = {
    isLoading: false,
    leases: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LEASES:
            return {
                ...state,
                isLoading: action.isLoading,
                leases: action.payload
            };
        default:
            return state;
    }
}
