import { createSlice } from '@reduxjs/toolkit';

export const BalanceSlice = createSlice({
  name: 'balance',
  initialState: { balance: '00.00' },
  reducers: {
    update(state, action) {
      state.balance = action.payload;
    },
  },
});
export const { update } = BalanceSlice.actions;
