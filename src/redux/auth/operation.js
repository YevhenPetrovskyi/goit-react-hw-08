import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  requestRegister,
  requestLogin,
  requestGetCurrentUser,
  requestLogOut,
  setToken,
} from '../../services/contactApi';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const data = await requestRegister(credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const data = await requestLogin(credentials);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await requestLogOut();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const token = thunkAPI.getState().auth.token;

  if (token === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  setToken(token);

  try {
    const data = await requestGetCurrentUser();

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});
