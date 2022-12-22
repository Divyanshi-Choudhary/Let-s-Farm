import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    SEND_VERIFICATION_CODE_REQUEST,
    SEND_VERIFICATION_CODE_SUCCESS,
    SEND_VERIFICATION_CODE_FAIL,
    VERIFY_VERIFICATION_CODE_REQUEST,
    VERIFY_VERIFICATION_CODE_SUCCESS,
    
  } from '../constants/UserConstant.js'

  export const authReducer = (state = { }, action) => {
    switch (action.type) {
      case LOGIN_REQUEST:
      case REGISTER_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
     
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false,
          isAuthenticated: true,
          
        };
      case LOGIN_FAIL:
      case REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
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

  export const emailVerification = (state = { }, action) => {
    switch (action.type) {
      case SEND_VERIFICATION_CODE_REQUEST:
      case VERIFY_VERIFICATION_CODE_REQUEST:
        return {
          loading: true,
        };
     
     case SEND_VERIFICATION_CODE_SUCCESS:
     case VERIFY_VERIFICATION_CODE_SUCCESS:
        return {
          ...state,
          ...action.payload,
          loading: false,          
        };
      case SEND_VERIFICATION_CODE_FAIL:
      case SEND_VERIFICATION_CODE_FAIL:
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