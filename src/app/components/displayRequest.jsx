"use client";
import styles from "./componentStyles/displayRequest.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchLabRequests } from "../redux/slices/labSlice"; // Ensure the correct path
import { useEffect } from "react";
import getFriendlyDate from "../functions/friendlyDate";


export default function DisplayRequest() {
  const labRequests = useSelector((state) => state.labRequest.labRequests);
  const status = useSelector((state) => state.labRequest.status);
  const dispatch = useDispatch();

  // Fetch lab requests on component mount
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLabRequests());
    }
  }, [status, dispatch]);

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        {status === "loading" && <div>Loading...</div>}
        {status === "succeeded" && (
          <ul>
            {labRequests.map((request) => (
              <li key={request.request_id}>
                <div className={styles.time}>{getFriendlyDate(request.date_and_time)}</div>
                <div className={styles.patientId}>{request.request_id}</div>
                <div className={styles.labDesc}>{request.lab_desc}</div>
                
                </li>
            ))}
          </ul>
        )}
        {status === "failed" && <div>Error loading requests</div>}
      </div>
    </div>
  );
}
