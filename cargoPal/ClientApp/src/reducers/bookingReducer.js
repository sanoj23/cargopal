import { bookingConstants } from '../constants/bookingConstants';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

const bookingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case bookingConstants.GET_BOOKING_REQUEST:
      return { ...state, loading: true };
    case bookingConstants.GET_BOOKING_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case bookingConstants.GET_BOOKING_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case bookingConstants.BOOKING_BY_ID_REQUEST:
      return { ...state, loading: true };
    case bookingConstants.BOOKING_BY_ID_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case bookingConstants.BOOKING_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case bookingConstants.BOOKING_BY_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case bookingConstants.BOOKING_BY_USER_SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };
    case bookingConstants.BOOKING_BY_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case bookingConstants.BOOKING_BY_SHIPMENT_REQUEST:
      return { ...state, loading: true };
    case bookingConstants.BOOKING_BY_SHIPMENT_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case bookingConstants.BOOKING_BY_SHIPMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case bookingConstants.ADD_BOOKING_REQUEST:
      return { ...state, loading: true };
    case bookingConstants.ADD_BOOKING_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case bookingConstants.ADD_BOOKING_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case bookingConstants.UPDATE_BOOKING_REQUEST:
      return { ...state, loading: true };
    case bookingConstants.UPDATE_BOOKING_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case bookingConstants.UPDATE_BOOKING_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case bookingConstants.DELETE_BOOKING_REQUEST:
      return { ...state, loading: true };
    case bookingConstants.DELETE_BOOKING_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case bookingConstants.DELETE_BOOKING_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default bookingReducer;
