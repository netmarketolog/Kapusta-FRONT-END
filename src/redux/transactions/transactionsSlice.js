import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  getReport,
  getTransactions,
} from './transactionsOperations';

const initialState = {
  isLoading: false,
  sumary: [],
  items: [],
  report: {},
  error: null,
  operationType: 'expense',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const transactionsSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.fulfilled, (state, action) => {
        handleFulfilled(state);
      })
      .addCase(addTransaction.rejected, handleError)
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        handleFulfilled(state);
        const index = state.items.findIndex(
          task => task._id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteTransaction.rejected, handleError)
      .addCase(getTransactions.pending, handlePending)
      .addCase(getTransactions.fulfilled, (state, action) => {
        handleFulfilled(state);
        const arr = Object.keys(action.payload.salary);
        const data = { ...action.payload.salary };
        if (!data[arr[0]]) return;
        state.items = action.payload.transactions;
        state.sumary = arr.map(item => {
          return { name: item, total: data[item].total };
        });
      })
      .addCase(getTransactions.rejected, handleError)
      .addCase(getReport.pending, handlePending)
      .addCase(getReport.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.report = action.payload;
      })
      .addCase(getReport.rejected, handleError),
});

export const transactionsReducer = transactionsSlice.reducer;
