"use client";
import styles from "./componentStyles/vitalForm.module.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS
import { postVitals } from "../redux/slices/vitalSlice";
import { useDispatch, useSelector } from "react-redux";
import timeStamp from "../functions/timestamp";
import generateId from "../functions/id";

// Generate timestamp
const formattedDate = timeStamp();
// Generate unique vital ID
const generateVitalId = generateId("V");

// Define and export the VitalCard component
export default function VitalCard({ patientId }) {
  // Accept patientId as a prop
  // Initialize form data state with an object containing input fields
  const [formData, setFormData] = useState({
    vitalId: generateVitalId, // State for generated vital ID
    patientId: patientId, // State for patient ID from props
    dateAndTime: formattedDate, // State for date and time
    weight: 0, // State for weight input
    temperature: 0, // State for temperature input
    bloodPressure: "", // State for blood pressure input
    heartRate: "", // State for heart rate input
    glucoseLevel: "", // State for glucose level input
  });

  // State to handle form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State to manage form key for resetting form
  const [formKey, setFormKey] = useState(Date.now());

  // Initialize Redux dispatch
  const dispatch = useDispatch();
  // Get vital post state from Redux store
  const vitalPost = useSelector((state) => state.vitals);

  // Function to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target; // Destructure name and value from event target
    // Update the formData state with the new value of the changed input field
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    // Dispatch the postVitals action with formData
    dispatch(postVitals(formData)).then((response) => {
      // Check if the request was fulfilled
      if (response.meta.requestStatus === "fulfilled") {
        // Show success toast notification
        toast.success("Patient vitals submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
        });
        // Reset the form data
        setFormData({
          patientId: patientId, // Reset patientId to the prop value
          dateAndTime: formattedDate,
          weight: 0,
          temperature: 0,
          bloodPressure: "",
          heartRate: "",
          glucoseLevel: "",
        });
      } else {
        // Show error toast notification
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
      {" "}
      {/* Card container */}
      <div className={styles.main}>
        {" "}
        {/* Main content container */}
        <div className={styles.head}>
          {" "}
          {/* Header container */}
          <h1>Patient Vitals</h1> {/* Header text */}
        </div>
        <div className={styles.horizontalLine}></div> {/* Horizontal line */}
        <div className={styles.formContainer}>
          {" "}
          {/* Form container */}
          <form key={formKey} className={styles.form} onSubmit={handleSubmit}>
            {" "}
            {/* Form element */}
            <div className={styles.vitalInput}>
              {" "}
              {/* Vital input container */}
              <div className={styles.inputBox}>
              <input
                id="temperature"
                type="number" // Input type
                name="temperature" // Input name
                value={formData.temperature} // Input value from state
                onChange={handleChange} // Handle change event
                placeholder="Temperature (°C)" // Input placeholder text
              />
              <input
                id="bp"
                type="text" // Input type
                name="bloodPressure" // Input name
                value={formData.bloodPressure} // Input value from state
                onChange={handleChange} // Handle change event
                placeholder="Blood Pressure (mmHg)" // Input placeholder text
              />
              <input
                id="weight"
                type="number" // Input type
                name="weight" // Input name
                value={formData.weight} // Input value from state
                onChange={handleChange} // Handle change event
                placeholder="Weight (kg)" // Input placeholder text
              />
              <input
                id="sugar"
                type="text" // Input type
                name="glucoseLevel" // Input name
                value={formData.glucoseLevel} // Input value from state
                onChange={handleChange} // Handle change event
                placeholder="Glucose Level (mg/dL)" // Input placeholder text
              />
              <input
                id="heart"
                type="text" // Input type
                name="heartRate" // Input name
                value={formData.heartRate} // Input value from state
                onChange={handleChange} // Handle change event
                placeholder="Heart Rate (bpm)" // Input placeholder text
              />
              <input
                type="hidden" // Hidden input type
                name="dateAndTime" // Input name
                value={formData.dateAndTime} // Input value from state
              />
              </div>
             
              <div className={styles.submit}>
                {" "}
                {/* Submit button container */}
                <button
                  type="submit" // Button type
                  disabled={isSubmitting} // Disabled state based on isSubmitting
                  className={styles.submitBtn} // Button class
                >
                  Submit
                </button>
                <ToastContainer /> {/* Toast notifications container */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
