import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from './types';

const initialState: AppState = {
  app: {name: ''},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.app.name = action.payload;
    },
  },
});

export const {setName} = appSlice.actions;

export default appSlice.reducer;
