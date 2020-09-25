import { shipmentsConstants } from '../constants/shipmentConstants';

const INITIAL_STATE = {
  loading: false,
  error: null,
  data: [],
};

const shipmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shipmentsConstants.GET_SHIPMENTS_REQUEST:
      return { ...state, loading: true };
    case shipmentsConstants.GET_SHIPMENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case shipmentsConstants.GET_SHIPMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case shipmentsConstants.SHIPMENTS_BY_ID_REQUEST:
      return { ...state, loading: true };
    case shipmentsConstants.SHIPMENTS_BY_ID_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case shipmentsConstants.SHIPMENTS_BY_ID_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case shipmentsConstants.SHIPMENTS_BY_USER_REQUEST:
      return { ...state, loading: true };
    case shipmentsConstants.SHIPMENTS_BY_USER_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case shipmentsConstants.SHIPMENTS_BY_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case shipmentsConstants.ADD_SHIPMENTS_REQUEST:
      return { ...state, loading: true };
    case shipmentsConstants.ADD_SHIPMENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case shipmentsConstants.ADD_SHIPMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case shipmentsConstants.UPDATE_SHIPMENTS_REQUEST:
      return { ...state, loading: true };
    case shipmentsConstants.UPDATE_SHIPMENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case shipmentsConstants.UPDATE_SHIPMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case shipmentsConstants.DELETE_SHIPMENTS_REQUEST:
      return { ...state, loading: true };
    case shipmentsConstants.DELETE_SHIPMENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case shipmentsConstants.DELETE_SHIPMENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default shipmentReducer;
