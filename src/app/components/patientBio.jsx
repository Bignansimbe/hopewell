"use client"; // Ensures the component is rendered on the client side

import styles from "./componentStyles/patientdetailsCard.module.css"; // Import CSS module for styling
import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks for dispatching actions and selecting state
import { fetchPatientsData } from "../redux/slices/patientSlice"; // Import Redux action for fetching patient data
import calculateAge from "../functions/age"; // Import function for calculating age

// Define and export the PatientDetailsCard component
export default function PatientBioCard({ patientId }) {
  // Accept patientId as a prop
  console.log(patientId); // Log the patientId for debugging
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const patientInfo = useSelector((state) => state.patients.patientsList); // Get patient info from Redux store
  const [patient, setPatient] = useState(null); // Initialize patient state
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null); // Initialize error state

  // Fetch patient data if not already fetched
  useEffect(() => {
    if (patientInfo.length === 0) {
      // Check if patient data is already fetched
      dispatch(fetchPatientsData()) // Dispatch fetchPatientsData action
        .then(() => setLoading(false)) // Set loading to false after fetching
        .catch((err) => {
          // Catch and handle any errors
          setError(err.message); // Set error message
          setLoading(false); // Set loading to false
        });
    } else {
      setLoading(false); // Set loading to false if data is already fetched
    }
  }, [dispatch, patientInfo.length]); // Dependency array for useEffect

  console.log(patientInfo); // Log patientInfo for debugging
  console.log(typeof patientInfo); // Log type of patientInfo for debugging

  // Set the selected patient based on patientId prop
  useEffect(() => {
    if (patientInfo.length > 0) {
      // Check if patient data is available
      const selectedPatient = patientInfo.find(
        // Find the patient with the matching ID
        (p) => p.patient_id === patientId
      );
      setPatient(selectedPatient); // Set the patient state
      console.log(patient); // Log the selected patient for debugging
    }
  }, [patientInfo, patientId]); // Dependency array for useEffect

  // Display loading state
  if (loading) {
    return <p>Loading...</p>; // Show loading message
  }

  // Display error state
  if (error) {
    return <p>Error: {error}</p>; // Show error message
  }

  // Return the patient details JSX
  return (
    <main className={styles.main}>
      <div className={styles.leftdiv}>
        <div className={styles.patientDetailsBox}>
          <fieldset className={styles.patientDetails}>
            <legend className={styles.pd_legend}>Patient Information</legend>
            <div className={styles.details}>
              <p>
                Patient ID:{" "}
                <p className={styles.info}>
                  {patient ? patient.patient_id : ""}
                </p>
              </p>
              <p>
                Patient Name:{" "}
                <p className={styles.info}>
                  {" "}
                  {patient ? `${patient.first_name} ${patient.last_name}` : ""}
                </p>
              </p>
              <p>
                Patient Age:{" "}
                <p className={styles.info}>
                  {" "}
                  {patient ? calculateAge(patient.dob) : ""}
                </p>
              </p>
              <p>
                Gender:{" "}
                <p className={styles.info}>{patient ? patient.gender : ""}</p>
              </p>
              <p>
                Residence:{" "}
                <p className={styles.info}>
                  {patient ? patient.residence : ""}
                </p>
              </p>
            </div>
          </fieldset>
        </div>
      </div>
    </main>
  );
}
