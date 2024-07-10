// src/features/patientsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an initial state
const initialState = {
  patientsList: [],
  searchPatientsList: [],
  loading: false,
  error: null,
};

// Create an async thunk for fetching data
export const fetchPatientsData = createAsyncThunk(
  "api/fetchPatientsData",
  async () => {
    return axios
      .get("http://localhost:3000/patients")
      .then((response) => response.data);
  }
);

// Create a slice
const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    searchPatients: (state, action) => {
      const searchTerm = action.payload.toLowerCase().trim(); // Convert to lowercase and trim whitespace
      if (searchTerm === "") {
        // If search term is empty, reset the search results
        state.searchPatientsList = [];
      } else {
        // Otherwise, filter patients based on search criteria
        const filteredPatients = state.patientsList.filter((patient) =>
          patient.first_name.toLowerCase().includes(searchTerm) ||
          patient.last_name.toLowerCase().includes(searchTerm) ||
          String(patient.patient_ID).includes(searchTerm) ||
          patient.telephone.toLowerCase().includes(searchTerm)
        );
        state.searchPatientsList = filteredPatients.map((patient) => ({
          first_name: patient.first_name,
          last_name: patient.last_name,
          patient_ID: patient.patient_id,
          telephone: patient.telephone,
        }));
      }
    },
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchPatientsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPatientsData.fulfilled, (state, action) => {
        state.loading = false;
        state.patientsList = action.payload;
      })
      .addCase(fetchPatientsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and reducer
//export { fetchPatientsData };
export const { searchPatients } = patientsSlice.actions;
export default patientsSlice.reducer;
