"use client";
import styles from "./componentStyles/labrequestCounter.module.css";
import React, { useEffect } from "react"; // Import React and useEffect hook
import { useDispatch, useSelector } from "react-redux"; // Import hooks from react-redux
import { fetchLabRequests, fetchLabResults } from "../redux/slices/labSlice"; // Ensure the correct path to the slice
import Image from "next/image";


const LabRequestCounter = () => {
  const dispatch = useDispatch(); // Create a dispatch function
  const labRequests = useSelector((state) => state.labRequest.labRequests); // Get lab requests from state
  const status = useSelector((state) => state.labRequest.status); // Get status from state

  // Fetch lab requests on component mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLabRequests()); // Dispatch the fetchLabRequests action
    }
  }, [status, dispatch]);

  // Return JSX to render the component
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.numbox}>{labRequests.length}</div>
        <div className={styles.titleBox}>
          <p>recent Lab requests </p>
        </div>
      </div>
      <div className={styles.right}>
      <Image 
        src="/icons/testtube2.png" 
        alt="Description of image" 
        width={40} 
        height={40} 
      />
      </div>
      {/* Display the number of lab requests */}
    </div>
  );
};

export default LabRequestCounter; // Export the component
