"use client";
// PatientForm.js
import styles from "./componentStyles/registrationForm.module.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS 
import { postPatientData } from "../redux/slices/patientSlice";





const PatientForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    age: 0,
    gender: "",
    residence: "",
    telephone: "",
    emergency_contact: "",
    health_insurance: false,
    marital_status: "",

    // Add other properties here...
  });

  const dispatch = useDispatch();
  const patientData  = useSelector((state)=>state.patients.patientList)
 
  

  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postPatientData(formData))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          toast.success('Patient data submitted successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
          });
          // Reset form data
          setFormData({
            first_name: '',
            last_name: '',
            dob: '',
            age: 0,
            gender: '',
            residence: '',
            telephone: '',
            emergency_contact: '',
            health_insurance: false,
            marital_status: '',
          });
        } else {
          toast.error('Error submitting patient data. Please try again.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: true,
          });
        }
      });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Handle checkbox input separately
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <input
        className={styles.inputs}
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
      />

      <input
        className={styles.inputs}
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
      />

      <input
        className={styles.inputs}
        type="date"
        name="dob"
        placeholder=" DDDD/MMMM/YYYY"
        value={formData.dob}
        onChange={handleChange}
      />

      <input
        className={styles.inputs}
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        className={styles.inputs}
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      />

      <input
        className={styles.inputs}
        type="text"
        name="residence"
        placeholder="Residence"
        value={formData.residence}
        onChange={handleChange}
      />

      <input
        className={styles.inputs}
        type="text"
        name="telephone"
        placeholder="Contact"
        value={formData.telephone}
        onChange={handleChange}
      />

      <input
        className={styles.inputs}
        type="text"
        name="emergency_contact"
        placeholder="Emergency Contact"
        value={formData.emergency_contact}
        onChange={handleChange}
      />
      <div className={styles.insurance}>
        <label for="insurance">Health Insurance:</label>

        <input
          id="insurance"
          className={styles.checkbox}
          type="checkbox"
          name="health_insurance"
          placeholder="Health Insurance"
          value={formData.health_insurance}
          onChange={handleChange}
        />
      </div>

      <input
        className={styles.inputs}
        type="text"
        name="marital_status"
        placeholder="Marital Status"
        value={formData.marital_status}
        onChange={handleChange}
      />
      {/* Add other input fields for other properties */}
      <button type="submit">Submit</button>
      <ToastContainer />
    </form>
  );
};

export default PatientForm;
