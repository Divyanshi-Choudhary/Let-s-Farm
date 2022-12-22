import axios from 'axios';
import { 
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS,
    ADD_ITEM_FAIL,
    GET_ALL_ITEMS_REQUEST,
    GET_ALL_ITEMS_SUCCESS,
    GET_ALL_ITEMS_FAIL
} from '../constants/ItemConstant.js';


export const addItem = () => async (dispatch) => {
    try {
      dispatch({ type: ADD_ITEM_REQUEST });
  
      const config = { headers: { "Content-Type": "application/json" } };
  
      const {data} = await axios.post(
        `http://localhost:4000/accounts/signIn`,
        {  },
        config
      );
      
      dispatch({ type: ADD_ITEM_SUCCESS, payload:data});
    } catch (error) {
      dispatch({ type: ADD_ITEM_FAIL, payload: error.response.data.message });
    }
  };

  export const getAllItems = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_ITEMS_REQUEST });
    
      const {data} = await axios.get(
        `https://ap-south-1.aws.data.mongodb-api.com/app/letusfarm-fuadi/endpoint/listItems?secret=alwaysShine`,
      );
     console.log(data)
      dispatch({ type: GET_ALL_ITEMS_SUCCESS, payload:data});
    } catch (error) {
      dispatch({ type: GET_ALL_ITEMS_FAIL, payload: error.response.data.message });
    }
  };
