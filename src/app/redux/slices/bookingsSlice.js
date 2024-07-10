// src/features/bookingsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state
const initialState = {
  bookingsList: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching data
export const fetchBookingsData = createAsyncThunk(
  "api/fetchBookingsData",
  async () => {
    return axios
      .get("http://localhost:3000/bookings/recentBookings")
      .then((response) => response.data);
  }
);

// Create a slice
const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookingsData.fulfilled, (state, action) => {
        state.loading = false;
        state.bookingsList = action.payload;
      })
      .addCase(fetchBookingsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and reducer
//export { fetchBookingsData };
export default bookingsSlice.reducer;
