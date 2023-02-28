import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://kapusta-wwgw.onrender.com';

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async ({ date, description, category, sum, operation }, ThunkAPI) => {
    try {
      const { data } = await axios.post('/transactions', {
        date,
        description,
        category,
        sum,
        operation,
      });
      return data;
    } catch (e) {
      Notify.warning(e.response.data.message);
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async ({ transactionId }, ThunkAPI) => {
    try {
      const { data } = await axios.post(`/transactions/${transactionId}`);
      data.id = transactionId;
      return data;
    } catch (e) {
      Notify.warning(e.response.data.message);
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getTransactions = createAsyncThunk(
  'transactions/getTransactions',
  async ({ operation }, ThunkAPI) => {
    try {
      const { data } = await axios.get(`/transactions/${operation}`);
      return data;
    } catch (e) {
      Notify.warning(e.response.data.message);
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getReport = createAsyncThunk(
  'transactions/getReport',
  async ({ operation, year, month }, ThunkAPI) => {
    try {
      const { data } = await axios.get(
        `/transactions/report/${operation}?year=${year}&month=${month}`
      );
      return data;
    } catch (e) {
      Notify.warning(e.response.data.message);
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);
