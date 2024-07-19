"use client";

import styles from "./componentStyles/awaitingConsultation.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAwaitingConsultation } from "../redux/slices/consultationSlice";
import getFriendlyDate from "../functions/friendlyDate";

export default function WaitingList() {
  const awaitingConsultation = useSelector(
    (state) => state.consultation.awaitingConsultationList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAwaitingConsultation());
  }, [dispatch]);

 

  return (
    <main className={styles.main}>
      <form className={styles.form}> 
        <input list="patients" name="patient" placeholder="waiting consultation" className={styles.input}/>
        <datalist id="patients">
          {awaitingConsultation && awaitingConsultation.length > 0 ? (
            awaitingConsultation.map((patient, index) => (
              <option
                key={index}
                value={`${patient.patient_id} - ${patient.first_name} ${
                  patient.last_name
                } - ${getFriendlyDate(patient.data_and_time)}`}
              />
            ))
          ) : (
            <option value="Loading..." />
          )}
        </datalist>
      </form>
    </main>
  );
}
