import { createSlice } from '@reduxjs/toolkit';
import {
  apiRegisterUser,
  apiLoginUser,
  apiRefreshUser,
  apiLogOutUser,
} from './operation';

const INTIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INTIAL_STATE,

  extraReducers: (builder) => {
    builder
      //Register
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //Login
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      //Refresh
      .addCase(apiRefreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(apiRefreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(apiRefreshUser.rejected, (state) => {
        state.isRefreshing = false;
      })
      //Logout
      .addCase(apiLogOutUser.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
    // .addCase(apiLogOutUser.rejected, (state) => {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // });
  },
});

export const authReducer = authSlice.reducer;
