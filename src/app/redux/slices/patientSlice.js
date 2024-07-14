// src/features/patientsSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import generateId from "@/app/functions/id"; // import the generate id function

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
      .get("https://hms-backend-gold.vercel.app/patients")
      .then((response) => response.data);
  }
);

// POST REQUEST
export const postPatientData = createAsyncThunk(
  'api/postPatientData',
  async (formData, { rejectWithValue }) => {
    try {
      // changes the date of birth format in reverse order
      const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
      };

      const transformedData = {
        patientId: generateId('P'), // automatically assigns id to the patient
        firstName: formData.first_name,
        lastName: formData.last_name,
        dob: formatDate(formData.dob),
        age: parseInt(formData.age),
        gender: formData.gender,
        residence: formData.residence.toLowerCase(),
        telephone: formData.telephone,
        emergencyContact: formData.emergency_contact,
        healthInsurance: formData.health_insurance,
        maritalStatus: formData.marital_status,
      };

      const response = await axios.post('https://hms-backend-gold.vercel.app/patients/insertRecord', transformedData, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
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
      })
      .addCase(postPatientData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(postPatientData.fulfilled, (state, action) => {
        state.loading = false;
        state.patientsList.push(action.payload);
      })
      .addCase(postPatientData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export the async thunk and reducer
//export { fetchPatientsData };
export const { searchPatients } = patientsSlice.actions;
export default patientsSlice.reducer;
