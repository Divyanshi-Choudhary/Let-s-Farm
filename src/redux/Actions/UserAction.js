import axios from 'axios'

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SEND_VERIFICATION_CODE_REQUEST,
    SEND_VERIFICATION_CODE_SUCCESS,
    SEND_VERIFICATION_CODE_FAIL,
    CLEAR_ERRORS,
    VERIFY_VERIFICATION_CODE_REQUEST,
    VERIFY_VERIFICATION_CODE_SUCCESS,
    VERIFY_VERIFICATION_CODE_FAIL,

  } from '../constants/UserConstant.js'

    export const login = ({email,password}) => async (dispatch) => {
        try {
          dispatch({ type: LOGIN_REQUEST });
      
          const config = { headers: { "Content-Type": "application/json" } };
          const {data} = await axios.post(
            `http://localhost:4000/accounts/signIn`,
            { email, password },
            config
          );
          console.log(data)
          dispatch({ type: LOGIN_SUCCESS, payload:data});
        } catch (error) {
          dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
        }
      };

      export const register = ({fullName,phone,email,password,confirmPassword}) =>async(dispatch)=>{
        try {
          dispatch({ type:REGISTER_REQUEST});
          const config = { headers: { "Content-Type": "application/json" } };
          
          const {data} = await axios.post('http://localhost:4000/accounts/register',{fullName,phone,email,password,confirmPassword},config);

          dispatch({ type:REGISTER_SUCCESS, payload:data})
          
        } catch (error) {
          dispatch({type: REGISTER_FAIL, payload: error.response.data.message});
          
        }
      }

      export const sendVerificationCode = (email) => async(dispatch)=>{
        try {

          dispatch({type:SEND_VERIFICATION_CODE_REQUEST});
          const config = { headers: { "Content-Type": "application/json" } };

          const {data} = await axios.post('http://localhost:4000/accounts/sendVerificationCode',{email},config);
          
          dispatch({type:SEND_VERIFICATION_CODE_SUCCESS, payload:data})

        } catch (error) {
          
          dispatch({type: SEND_VERIFICATION_CODE_FAIL, payload: error.response.data.message});

        }
      }

      export const verifyVerificationCode = (email,code) => async(dispatch)=>{
        try {

          dispatch({type:VERIFY_VERIFICATION_CODE_REQUEST});
          const config = { headers: { "Content-Type": "application/json" } };

          const {data} = await axios.post(`http://localhost:4000/accounts/${email}/sendVerificationCode`,{code},config);
          
          dispatch({type:VERIFY_VERIFICATION_CODE_SUCCESS, payload:data})

        } catch (error) {
          
          dispatch({type: VERIFY_VERIFICATION_CODE_FAIL, payload: error.response.data.message});

        }
      }
