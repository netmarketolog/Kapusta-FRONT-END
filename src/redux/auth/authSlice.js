import { createSlice } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix';
import {
  googleUser,
  logIn,
  logOut,
  RefreshUser,
  register,
} from './authOperations';
const initialState = {
  user: { email: null, balance: null }, //зависит от того, как будем получать с бека
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { email: null, balance: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(RefreshUser.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = true;
      })
      .addCase(RefreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(RefreshUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })
      .addCase(googleUser.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = true;
      })
      .addCase(googleUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(googleUser.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      }),
});

export const authReducer = authSlice.reducer;
