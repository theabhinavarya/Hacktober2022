import { StoreMallDirectory } from '@material-ui/icons';
import { configureStore } from '@reduxjs/toolkit';
import carReducer from "./carSlice"

export const store = configureStore({
  reducer: {
    car: carReducer
  },
});

