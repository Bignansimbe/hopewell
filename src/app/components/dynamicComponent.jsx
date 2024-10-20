// components/DynamicBooking.js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DynamicBooking() {
  const router = useRouter();
  const { bookingId, patientId } = router.query;

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    if (bookingId && patientId) {
      axios.get(`https://hms-backend-gold.vercel.app/bookings/${bookingId}/patient/${patientId}`)
        .then(response => {
          setBooking(response.data);
        })
        .catch(error => {
          console.error('Error fetching booking:', error);
        });
    }
  }, [bookingId, patientId]);

  if (!booking) return <div>Loading...</div>;

  return (
    <div>
      <h1>Booking Details</h1>
      <p><strong>ID:</strong> {booking.bookingsId}</p>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Patient ID:</strong> {booking.patientId}</p>
      <p><strong>Health Insurance:</strong> {booking.healthInsurance ? 'Yes' : 'No'}</p>
    </div>
  );
}
