import { combineReducers } from 'redux';
import authReducer from './auth/index.js';

const reducers = combineReducers({
    authReducer
});

export default reducers;
