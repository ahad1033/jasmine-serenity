import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './features/servicesSlice'

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
