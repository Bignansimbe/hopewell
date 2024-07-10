// src/features/VitalsSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an initial state
const initialState = {
  vitalsList: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching data
export const fetchData = createAsyncThunk('api/fetchData', async () => {
  return axios
       .get('http://localhost:3000/vitals')
       .then((response) => response.data)
  
});

// Create a slice
const VitalsSlice = createSlice({
  name: 'vitals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.vitalsList = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and reducer
//export { fetchData };
export default VitalsSlice.reducer;
