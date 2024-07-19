import { configureStore } from "@reduxjs/toolkit";
import patientsDetails from "./slices/patientSlice";
import bookingSlice from "./slices/bookingsSlice";
import { combineReducers } from "redux";
import consultationSlice from "./slices/consultationSlice";
import vitalSlice from "./slices/vitalSlice";

const rootReducer = combineReducers({
  patients: patientsDetails,
  bookings: bookingSlice,
  consultation: consultationSlice,
  vitals: vitalSlice
  // Add other reducers if needed
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
