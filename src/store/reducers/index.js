import { combineReducers } from 'redux';
import authReducer from './authReducer';
import baseReducer from './baseReducer'

const rootReducer = combineReducers({
    authReducer: authReducer,
    baseReducer: baseReducer
});

export default rootReducer