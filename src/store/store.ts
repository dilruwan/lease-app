import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'; // Custom middleware for async actions

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
