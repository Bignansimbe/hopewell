"use client";
import styles from "./componentStyles/labrequestCounter.module.css";
import React, { useEffect } from "react"; // Import React and useEffect hook
import { useDispatch, useSelector } from "react-redux"; // Import hooks from react-redux
import { fetchLabResults } from "../redux/slices/labSlice"; // Ensure the correct path to the slice
import Image from "next/image";


const LabResultCounter = () => {
  const dispatch = useDispatch(); // Create a dispatch function
  const labResults = useSelector((state) => state.labRequest.labResults); // Get lab Results from state
  const status = useSelector((state) => state.labRequest.status); // Get status from state

  // Fetch lab Results on component mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLabResults()); // Dispatch the fetchLabResults action
    }
  }, [status, dispatch]);

  // Return JSX to render the component
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.numbox}>{labResults.length}</div>
        <div className={styles.titleBox}>
          <p>recent Lab Results </p>
        </div>
      </div>
      <div className={styles.right}>
      <Image 
        src="/icons/paper.png" 
        alt="Description of image" 
        width={40} 
        height={40} 
      />
      </div>
      {/* Display the number of lab Results */}
    </div>
  );
};

export default LabResultCounter; // Export the component
