// components/PatientForm.js
import { useState } from "react"; // Import useState hook from React
import { useDispatch } from "react-redux";
import styles from "./componentStyles/booking.module.css";
import generateId from "../functions/id"; // Function to generate ID
import getFriendlyDate from "../functions/friendlyDate"; // Function to get friendly date
import timeStamp from "../functions/timestamp"; // Function to get timestamp
import { addBooking } from "../redux/slices/bookingsSlice"; // Import the action
import getCurrentTimestamp from "../functions/currentTimeStamp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




// Functional component for the form
export default function BookingsForm() {
  // useState hook to manage form data
  const [formData, setFormData] = useState({
    patientId: "", // Initial state for Patient ID
    healthInsurance: false, // Initial state for checkbox
  });

  const dispatch = useDispatch(); // Use the useDispatch hook

  // Handle changes in input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update formData state based on input type
    setFormData({
      ...formData, // Spread previous state
      [name]: type === "checkbox" ? checked : value, // Update specific field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const formattedData = {
        bookingsId: generateId('B'), // Generate unique booking ID
        date: getCurrentTimestamp(), // Add friendly date with timestamp
        patientId: formData.patientId, // Patient ID
        healthInsurance: formData.healthInsurance, // healthInsurance status (true/false)
      };
      
  
      dispatch(addBooking(formattedData))
        .then(() => {
          // Show success notification
          toast.success('Booking successfully added!',{
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: true,
          });

          console.log(formattedData)
          // Clear the form
          setFormData({
            patientId: "",
            healthInsurance: false,
          });
        })
        .catch((error) => {
          // Show error notification
          toast.error(`Failed to add booking: ${error.message}`, {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: true,
          });
        });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.formContainer}>
        <legend>Register Record</legend>
        <div className={styles.inputContainer}>
          <input
            className={styles.patientId}
            placeholder="Patient ID"
            type="text"
            id="patientId"
            name="patientId"
            value={formData.patientId}
            onChange={handleChange} // Input change handler
          />
        </div>
        <div className={styles.inputContainer} id={styles.nhis}>
          <label htmlFor="healthInsurance">NHIS:</label>
          <input
            className={styles.checkbox}
            type="checkbox"
            id="healthInsurance"
            name="healthInsurance"
            checked={formData.healthInsurance}
            onChange={handleChange} // Checkbox change handler
          />
        </div>
        <button className={styles.submit} type="submit">Submit</button>
      </fieldset>
      <ToastContainer/>
    </form>
  );
}
