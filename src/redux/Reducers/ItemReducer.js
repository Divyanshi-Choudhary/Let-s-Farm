import { CLEAR_ERRORS, GET_ALL_ITEMS_FAIL, GET_ALL_ITEMS_REQUEST, GET_ALL_ITEMS_SUCCESS } from "../constants/ItemConstant";

export const itemReducer = (state = { }, action) => {
    switch (action.type) {
      case GET_ALL_ITEMS_REQUEST:
        return {
          loading: true,
        };
     
      case GET_ALL_ITEMS_SUCCESS:
        return {
          ...state,
          items:action.payload,
          loading: false,          
        };
      case GET_ALL_ITEMS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
