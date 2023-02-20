import { createSlice } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix';
import { logOut } from './authOperations';

const initialState = {
  user: { name: null, email: null }, //зависит от того, как будем получать с бека
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder.addCase(logOut.fulfilled, state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    }),
});

export const authReducer = authSlice.reducer;
