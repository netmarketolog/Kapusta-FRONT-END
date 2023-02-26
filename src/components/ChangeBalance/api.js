import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-wwgw.onrender.com/';

export async function patchBalance(data) {
  const finres = await axios.patch('users/update', data);
  return finres;
}

export const addBalance = createAsyncThunk('users/update', async balance => {
  const data = await patchBalance(balance);
  return data;
});

export async function fetchBalance() {
  const { data } = await axios.get('users/current');
  return data.user.balance;
}
