"use client";
import styles from "./componentStyles/patientdetailsCard.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatientsData } from "../redux/slices/patientSlice";
import { fetchVitals } from "../redux/slices/vitalSlice";
import calculateAge from "../functions/age";

export default function PatientDetailsCard({ patientId }) {
  console.log(patientId);
  const dispatch = useDispatch();
  const patientInfo = useSelector((state) => state.patients.patientsList);
  const vitalsList = useSelector((state) => state.vitals.vitalsList);
  const [patient, setPatient] = useState(null);
  const [vitals, setVitals] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patient data if not already fetched
  useEffect(() => {
    if (patientInfo.length === 0) {
      dispatch(fetchPatientsData())
        .then(() => setLoading(false))
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [dispatch, patientInfo.length]);
  console.log(patientInfo);
  console.log(typeof patientInfo);

  // Set the selected patient based on patientId prop
  useEffect(() => {
    if (patientInfo.length > 0) {
      const selectedPatient = patientInfo.find(
        (p) => p.patient_id === patientId
      );
      setPatient(selectedPatient);
      console.log(patient);
    }
  }, [patientInfo, patientId]);

  // Fetch vitals data if not already fetched
  useEffect(() => {
    console.log(vitalsList);

    if (vitalsList.length === 0) {
      dispatch(fetchVitals())
        .then(() => setLoading(false))
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }

    console.log(vitalsList);
  }, [dispatch, vitalsList.length]);

  // Set the selected vitals based on patientId prop
  useEffect(() => {
    if (vitalsList.length > 0) {
      const selectedVitals = vitalsList.find((v) => v.patient_id === patientId);
      setVitals(selectedVitals);
      console.log(vitals);
    }
  }, [vitalsList, patientId]);

  // Display loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display error state
  if (error) {
    return <p>Error: {error}</p>;
  }

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

        <div className={styles.vitalsBox}>
          <fieldset className={styles.vitals}>
            <legend className={styles.pd_legend}>Vitals</legend>
            <div className={styles.details}>
              <p>
                Weight:{" "}
                <p className={styles.info}>{vitals ? vitals.weight : ""} </p>
              </p>
              <p>
                Temperature:{" "}
                <p className={styles.info}>
                  {vitals ? vitals.temperature : ""}
                </p>
              </p>
              <p>
                Heart Rate: <p className={styles.info}>{vitals ? vitals.heart_rate : ""}</p>
              </p>
              <p>
                Blood Pressure:{" "}
                <p className={styles.info}>
                  {" "}
                  {vitals ? vitals.blood_pressure : ""}
                </p>
              </p>
              <p>
                Glucose level:{" "}
                <p className={styles.info}>
                  {vitals ? vitals.glucose_level : ""}
                </p>
              </p>
            </div>
          </fieldset>
        </div>
      </div>
    </main>
  );
}
