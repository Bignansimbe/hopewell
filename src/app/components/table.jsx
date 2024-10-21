// Import necessary modules and hooks
import styles from "./componentStyles/table.module.css"; // Import CSS module for styling
import { useEffect, useState } from "react"; // Import useEffect and useState hooks from React
import { useDispatch, useSelector } from "react-redux"; // Import hooks from react-redux
import { fetchBookingsData } from "../redux/slices/bookingsSlice"; // Import the fetchBookingsData action
import getFriendlyDate from "../functions/friendlyDate"; // Import function to format date
import Link from "next/link"; // Import Link from next/link for client-side navigation

// Table component
export default function Table() {
  const bookings = useSelector((state) => state.bookings); // Select bookings from the Redux store
  const dispatch = useDispatch(); // Use dispatch to send actions to the Redux store
  const [showModal, setShowModal] = useState(false); // Local state to manage modal visibility
  
  // Fetch bookings data on component mount
  useEffect(() => {
    dispatch(fetchBookingsData()); // Dispatch the action to fetch bookings data
  }, [dispatch]); // Dependency array includes dispatch to ensure it runs only once

  console.log("bookings", bookings); // Log bookings to console for debugging

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Patient ID</th>
          <th>Full name</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {bookings.bookingsList.map((booking) => (
          <Link className={styles.link} href={`/pages/opd/${booking.bookings_id}`} key={booking.bookings_id}>
            <tr className={styles.clickableRow}>
              <td>{booking.patient_id}</td>
              <td>
                {booking.first_name} {booking.last_name}
              </td>
              <td>{getFriendlyDate(booking.date)}</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  );
}
