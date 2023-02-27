import { createSlice } from '@reduxjs/toolkit';
import { addBalance } from './balanceOperation';

const initialState = {
  balance: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addBalance.pending, state => {
        state.isRefreshing = true;
        state.isLoggedIn = true;
      })
      .addCase(addBalance.fulfilled, (state, action) => {
        state.balance = action.payload.data.balance;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(addBalance.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      }),
});

export const balanceReducer = balanceSlice.reducer;
