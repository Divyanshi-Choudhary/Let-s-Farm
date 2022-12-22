import { configureStore } from "@reduxjs/toolkit";
import { itemReducer } from "./Reducers/ItemReducer.js";
import {authReducer,emailVerification} from './Reducers/UserReducer.js'


const store = configureStore({
  reducer: {

    auth:authReducer,
    email:emailVerification,
    items:itemReducer,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false
  }),
});

export default store;
