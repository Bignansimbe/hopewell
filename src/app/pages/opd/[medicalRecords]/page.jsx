"use client";
import VitalForm from "@/app/components/vitalForm";
import PatientBioCard from "@/app/components/patientBio";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookingsData } from "../../../redux/slices/bookingsSlice";
import { useEffect } from "react";
import styles from './medicalRecord.module.css'

export default function Page({ params }) {
  const bookings = useSelector((state) => state.bookings.bookingsList); // Select bookingsList from the Redux store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBookingsData()); // Dispatch the action to fetch bookings data
  }, [dispatch]);

  console.log("bookings", bookings); // Log bookings to console for debugging

  // Find the booking with the id that matches params.medicalRecords
  const booking = bookings
    ? bookings.find((b) => b.bookings_id === params.medicalRecords)
    : null;

  if (!booking) {
    return <div>Booking not found</div>;
  }

  return (
    <div className={styles.main}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <PatientBioCard patientId={booking.patient_id} />
          <VitalForm patientId={booking.patient_id} />
        </div>
      </div>
    </div>
  );
}
