"use client";
import styles from "./componentStyles/vitalCard.module.css";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import {  postVitals } from '../redux/slices/vitalSlice';
import { useDispatch, useSelector } from 'react-redux';
import timeStamp from "../functions/timestamp";
import generateId from "../functions/id";



// TIMESTAMP
/*const currentDate = new Date();
const formattedDate = currentDate.toLocaleString("en-GB", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});*/

const formattedDate = timeStamp()
const generateVitalId = generateId('V')

export default function VitalCard() {
  const [formData, setFormData] = useState({
    vitalId: generateVitalId,
    patientId:'HMPID2027',
    dateAndTime: formattedDate,
    weight: 0,
    temperature: 0,
    bloodPressure: "",
    heartRate: "",
    glucoseLevel: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formKey, setFormKey] = useState(Date.now());
  const dispatch = useDispatch()
  const vitalPost = useSelector((state)=> state.vitals)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postVitals(formData))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          toast.success("Patient vitals submitted successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
          });
          setFormData({
            patientId: 0,
            dateAndTime: "",
            weight: 0,
            temperature: 0,
            bloodPressure: "",
            heartRate: "",
            glucoseLevel: "",
          });
        } else {
          toast.error("Error submitting patient vitals. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      });
  };

  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <div className={styles.head}>
          <h1>Patient Vitals </h1>
        </div>
        <div className={styles.horizontalLine}></div>
       
        <div className={styles.formContainer}>
          <form key={formKey} className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.vitalInput}>
              <div className={styles.inputRow1}>
                <label htmlFor="temperature">Body Temperature: </label>
                <input
                  id="temperature"
                  type="number"
                  name="temperature"
                  value={formData.temperature}
                  onChange={handleChange}
                />
                <label htmlFor="bp">Blood Pressure:</label>
                <input
                  id="bp"
                  type="text"
                  name="bloodPressure"
                  value={formData.bloodPressure}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputRow2}>
                <label htmlFor="weight">Body Weight: </label>
                <input
                  id="weight"
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
                <label htmlFor="sugar">Glucose Level: </label>
                <input
                  id="sugar"
                  type="text"
                  name="glucoseLevel"
                  value={formData.glucoseLevel}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputRow3}>
                <label htmlFor="heart">Heart Rate: </label>
                <input
                  id="heart"
                  type="text"
                  name="heartRate"
                  value={formData.heartRate}
                  onChange={handleChange}
                />
                <input
                  type="hidden"
                  name="dateAndTime"
                  value={formData.dateAndTime}
                />
              </div>
              <div className={styles.submit}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={styles.submitBtn}
                >
                  Submit
                </button>
                <ToastContainer/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
