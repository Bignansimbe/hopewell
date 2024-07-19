// src/features/VitalsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state
const initialState = {
  vitalsList: [], // List to store vitals data
  loading: false, // Loading state to indicate data fetching
  error: null, // Error state to store any errors
};

// Create an async thunk for fetching vitals data
export const fetchVitals = createAsyncThunk("vitals/fetchVitals", async () => {
  return axios
    .get("https://hms-backend-gold.vercel.app/vitals")
    .then((response) => response.data);
});

// Create an async thunk for fetching vitals data by patient ID
export const fetchVitalsById = createAsyncThunk(
  "vitals/fetchVitalsById",
  async (patientId) => {
    return axios
      .get(`https://hms-backend-gold.vercel.app/vitals/patientVital/${patientId}`)
      .then((response) => response.data);
  }
);

// Create an async thunk for posting vitals data
export const postVitals = createAsyncThunk(
  "vitals/postVitals",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://hms-backend-gold.vercel.app/vitals/insertVitals",
        data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create a slice for vitals
const VitalsSlice = createSlice({
  name: "vitals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state for fetching data
      .addCase(fetchVitals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state for fetching data
      .addCase(fetchVitals.fulfilled, (state, action) => {
        state.loading = false;
        state.vitalsList = action.payload;
      })
      // Handle rejected state for fetching data
      .addCase(fetchVitals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle pending state for fetching data by patient ID
      .addCase(fetchVitalsById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state for fetching data by patient ID
      .addCase(fetchVitalsById.fulfilled, (state, action) => {
        state.loading = false;
        state.vitalsList = action.payload;
      })
      // Handle rejected state for fetching data by patient ID
      .addCase(fetchVitalsById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle pending state for posting data
      .addCase(postVitals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state for posting data
      .addCase(postVitals.fulfilled, (state, action) => {
        state.loading = false;
        state.vitalsList.push(action.payload);
      })
      // Handle rejected state for posting data
      .addCase(postVitals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the async thunk and reducer
export default VitalsSlice.reducer;
