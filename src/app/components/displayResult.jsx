"use client";
import styles from "./componentStyles/displayRequest.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchLabResults } from "../redux/slices/labSlice"; // Ensure the correct path
import { useEffect } from "react";
import getFriendlyDate from "../functions/friendlyDate";


export default function DisplayResult() {
  const labResults = useSelector((state) => state.labRequest.labResults);
  const status = useSelector((state) => state.labRequest.status);
  const dispatch = useDispatch();

  // Fetch lab Results on component mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLabResults());
    }
  }, [status, dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        {status === "loading" && <div>Loading...</div>}
        {status === "succeeded" && (
          <ul>
            {labResults.map((Result) => (
              <li key={Result.Result_id}>
                <div className={styles.time}>{getFriendlyDate(Result.date_and_time)}</div>
                <div className={styles.patientId}>{Result.request_id}</div>
                <div className={styles.labDesc}>{Result.lab_desc}</div>
                
                </li>
            ))}
          </ul>
        )}
        {status === "failed" && <div>Error loading Results</div>}
      </div>
    </div>
  );
}
