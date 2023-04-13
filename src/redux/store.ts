import {configureStore} from '@reduxjs/toolkit';
import appReducer from './slice';

const store = configureStore({
  reducer: appReducer,
});

export default store;
