import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import shipmentReducer from './shipmentReducer';

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  shipments: shipmentReducer,
});

export default rootReducer;
