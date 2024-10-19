// src/features/bookingsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state
const initialState = {
  bookingsList: [],  // Array to hold bookings data
  loading: false,    // Boolean to indicate loading state
  error: null,       // Variable to store error message
  newBooking: null,   // State for the new booking
};

// Create an async thunk for fetching data
export const fetchBookingsData = createAsyncThunk(
  "api/fetchBookingsData",
  async () => {
    // Fetch data from the API endpoint
    return axios
      .get("https://hms-backend-gold.vercel.app/bookings/recentBookings")
      .then((response) => response.data);  // Return the data from the response
  }
);

// Create an async thunk for adding a new booking
export const addBooking = createAsyncThunk(
  "api/addBooking",
  async (newBooking) => {
    // Post data to the API endpoint
    return axios
      .post("https://hms-backend-gold.vercel.app/bookings/book", newBooking)
      .then((response) => response.data);  // Return the data from the response
  }
);


// Create a slice
const bookingsSlice = createSlice({
  name: "bookings",  // Name of the slice
  initialState,      // Initial state of the slice
  reducers: {},      // Reducers (none in this case)
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingsData.pending, (state) => {
        state.loading = true;   // Set loading to true when the request is pending
        state.error = null;     // Clear any existing errors
      })
      .addCase(fetchBookingsData.fulfilled, (state, action) => {
        state.loading = false;  // Set loading to false when the request is fulfilled
        state.bookingsList = action.payload;  // Update bookingsList with the fetched data
      })
      .addCase(fetchBookingsData.rejected, (state, action) => {
        state.loading = false;  // Set loading to false when the request is rejected
        state.error = action.error.message;  // Set the error message from the action
      })
      .addCase(addBooking.pending, (state) => {
        state.loading = true;   // Set loading to true when the request is pending
        state.error = null;     // Clear any existing errors
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.loading = false;  // Set loading to false when the request is fulfilled
        state.newBooking = action.payload;  // Update newBooking with the added data
      })
      .addCase(addBooking.rejected, (state, action) => {
        state.loading = false;  // Set loading to false when the request is rejected
        state.error = action.error.message;  // Set the error message from the action
      });
  },
});

// Export the reducer for use in the store
export default bookingsSlice.reducer;
