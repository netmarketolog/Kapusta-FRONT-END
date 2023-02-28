import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://kapusta-wwgw.onrender.com';

export const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post('/auth/register', credentials);
      setAuthHeader(data.token.accessToken);
      return data;
    } catch (e) {
      Notify.warning(e.response.data.message);
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post('/auth/login', credentials);
      setAuthHeader(data.token.accessToken);
      return data;
    } catch (e) {
      Notify.warning(e.response.data.message);
      return ThunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (error) {
    Notify.warning(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const RefreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const token = await refreshToken(persistedToken);
      setAuthHeader(token.accessToken);
      const { data } = await axios.get('/users/current');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const googleUser = createAsyncThunk(
  'auth/google',
  async ({ accessToken }, thunkAPI) => {
    try {
      setAuthHeader(accessToken);
      const { data } = await axios.get('/users/current');

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshToken = async token => {
  if (Date.now() >= token.expiresIn) {
    const refreshToken = { refreshToken: token.refreshToken };
    const { data } = await axios.post('/auth/refresh', refreshToken);
    return data;
  }

  return token;
};
