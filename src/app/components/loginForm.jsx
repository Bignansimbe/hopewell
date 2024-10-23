"use client"; // Specifies that the component should be rendered on the client side
import styles from "./componentStyles/loginForm.module.css"; // Importing CSS module for styling
import axios from "axios"; // Importing axios for API requests
import { useState } from "react"; // Importing useState from React for state management
import { ToastContainer, toast } from "react-toastify"; // Importing Toastify for notifications
import "react-toastify/dist/ReactToastify.css"; // Importing Toastify CSS
import { useRouter } from 'next/navigation'; // Importing useRouter from next/router for navigation

const LoginForm = ({ department }) => { // Accepting department as a prop
  const [ID, setID] = useState(""); // State variable for ID
  const [password, setPassword] = useState(""); // State variable for password
  const [pledge, setPledge] = useState(false); // State variable for pledge checkbox
  const [showPassword, setShowPassword] = useState(false); // State variable for password visibility
  const router = useRouter(); // Using useRouter hook for navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    //console.log({ ID, password, department }); // Logging form data to the console

    try {
      // Sending data to the backend for verification
      const response = await axios.post("https://hms-backend-gold.vercel.app/employees/verify-password", {
        employee_id: ID, // Employee ID
        password: password, // Password
        department: department, // Department
      });

      console.log("Response:", response.data); // Logging the response from the backend

      if (response.status === 200) { // Check if the response status is 200
        toast.success("Login successful!"); // Display success notification
        setTimeout(() => {
          router.push(`/pages/laboratory/${response.data.employee_id}`); // Use router to navigate to dynamic dashboard with user ID
        }, 1000); // Add a delay to ensure the toast notification is seen
     
    } else if (response.status === 202) { // Check if the response status is 202
        toast.success("Accepted! Redirecting..."); // Display success notification
        setTimeout(() => {
          router.push(`/accepted/${response.data.department}`); // Use router to navigate to another page with user ID
        }, 1000); // Add a delay to ensure the toast notification is seen
      } else {
        toast.error("Unexpected response status"); // Handle unexpected status
      }
    } catch (error) {
      console.error("Error:", error); // Logging any errors

      // Constructing an error message based on the response
      const errorMessage = error.response && error.response.data
        ? error.response.data.message // Using backend error message if available
        : "Login failed. Please try again."; // Default error message
      toast.error(errorMessage); // Display error notification
    }

    setID(""); // Clearing ID input field
    setPassword(""); // Clearing password input field
    setPledge(false); // Resetting pledge checkbox
    setShowPassword(false); // Resetting password visibility checkbox
  };

  // Returning the form JSX
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.loginForm}> {/* Form element with onSubmit event */}
        <div className={styles.input}> {/* Div for input fields */}
          <input
            className={styles.inputs}
            type="text"
            placeholder="ID"
            value={ID}
            onChange={(e) => setID(e.target.value)}
            required
          /> {/* Input for ID */}
          <input
            className={styles.inputs}
            type={showPassword ? "text" : "password"} // Toggle between text and password input types
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          /> {/* Input for password */}
          <div className={styles.showPassword}> {/* Div for password input and toggle */}
            <input
              className={styles.checkPassword}
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
            /> {/* Checkbox to toggle password visibility */}
            <label htmlFor="showPassword">Show Password</label> {/* Label for password visibility checkbox */}
          </div>
        </div>
        <div className={styles.pledge}> {/* Div for pledge checkbox and label */}
          <input
            className={styles.checkbox}
            type="checkbox"
            id="pledge"
            checked={pledge}
            onChange={(e) => setPledge(e.target.checked)}
            required
          /> {/* Checkbox for pledge */}
          <label htmlFor="pledge">I pledge to give the best of treatment</label> {/* Label for checkbox */}
        </div>
        <button type="submit" className={styles.submit} disabled={!pledge}>
          Login
        </button> {/* Submit button for form, disabled unless pledge is checked */}
        <ToastContainer /> {/* Toast notifications container */}
      </form>
    </>
  );
};

// Exporting the LoginForm component as the default export
export default LoginForm;
