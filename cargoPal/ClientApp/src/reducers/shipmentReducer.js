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

    default:
      return state;
  }
};

export default shipmentReducer;
