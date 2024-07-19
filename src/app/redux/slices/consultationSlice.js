// src/features/patientsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import generateId from "@/app/functions/id"; // import the generate id function
import calculateAge from "@/app/functions/age";

// Define an initial state
const initialState = {
  awaitingConsultationList: [],
  medicalRecord: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching data
export const fetchAwaitingConsultation = createAsyncThunk(
  "api/fetchAwaitingConsultation",
  async () => {
    return axios
      .get("http://localhost:3000/consultation/awaitingConsultation")
      .then((response) => response.data);
  }
);

// POST REQUEST



// Create a slice
const consultationSlice = createSlice({
  name: "consultation",
  initialState,
  reducers: {
    
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchAwaitingConsultation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAwaitingConsultation.fulfilled, (state, action) => {
        state.loading = false;
        state.awaitingConsultationList = action.payload;
      })
      .addCase(fetchAwaitingConsultation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

// Export the async thunk and reducer
//export { fetchAwaitingConsultation };
//export const { searchPatients } = patientsSlice.actions;
export default consultationSlice.reducer;
