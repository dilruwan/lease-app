import { combineReducers } from 'redux';
import LeasesReducer from './leasesReducer';
import leaseDetailsReducer from './leaseDetailsReducer';

const rootReducer = combineReducers ({
    leasesReducer: LeasesReducer,
    leaseDetailsReducer: leaseDetailsReducer
});

export default rootReducer;
