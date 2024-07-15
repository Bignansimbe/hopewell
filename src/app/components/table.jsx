import styles from "./componentStyles/table.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookingsData } from "../redux/slices/bookingsSlice";
import getFriendlyDate from "../functions/friendlyDate";
import Link from "next/link";





export default function Table() {
  const bookings = useSelector((state) => state.bookings);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);



  useEffect(() => {
    dispatch(fetchBookingsData());
  }, [dispatch])
  
  console.log("bookings", bookings);

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
          <Link className={styles.link} href="/modal" key={booking.bookings_id}>
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
