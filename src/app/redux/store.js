import { configureStore } from "@reduxjs/toolkit";
import patientsDetails from "./slices/patientSlice";
import bookingSlice from "./slices/bookingsSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  patients: patientsDetails,
  bookings: bookingSlice,
  // Add other reducers if needed
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
