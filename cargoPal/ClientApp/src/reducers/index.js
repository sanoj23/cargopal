import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import shipmentReducer from './shipmentReducer';
import bookingReducer from './bookingReducer';

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  shipments: shipmentReducer,
  bookings: bookingReducer,
});

export default rootReducer;
