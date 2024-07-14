// src/features/VitalsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state
const initialState = {
  vitalsList: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching data
export const fetchData = createAsyncThunk("api/fetchData", async () => {
  return axios
    .get("https://hms-backend-gold.vercel.app/vitals")
    .then((response) => response.data);
});

export const postVitals = createAsyncThunk(
  "api/postVitals",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/vitals/insertVitals",
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create a slice
const VitalsSlice = createSlice({
  name: "vitals",
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
      })
      .addCase(postVitals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postVitals.fulfilled, (state, action) => {
        state.loading = false;
        state.vitalsList.push(action.payload);
      })
      .addCase(postVitals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the async thunk and reducer
//export { fetchData };
export default VitalsSlice.reducer;
