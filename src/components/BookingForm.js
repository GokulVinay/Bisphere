import React, { useState } from 'react';

function BookingForm() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [rooms, setRooms] = useState(1);
  const [totalCost, setTotalCost] = useState(12430);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const guestDetails = {
    name: 'Amit Jha',
    adults: 1,
    children: 2,
    email: 'amit.jha6700@gmail.com',
    phone: '+91 - 7764997022',
  };

  const calculateTotalCost = () => {
    const baseRate = 12430; // Assume this as the rate for a room for the stay duration
    return baseRate * rooms;
  };

  const handleConfirmBooking = () => {
    if (checkIn && checkOut && rooms > 0) {
      setTotalCost(calculateTotalCost());
      setIsConfirmed(true);
      alert(`Booking Confirmed! \nDetails:\n
        Name: ${guestDetails.name}\n
        Email: ${guestDetails.email}\n
        Check-In: ${checkIn}\n
        Check-Out: ${checkOut}\n
        Rooms: ${rooms}\n
        Adults: ${guestDetails.adults}\n
        Children: ${guestDetails.children}\n
        Total: ₹ ${calculateTotalCost()}
      `);
    } else {
      alert("Please fill in all fields to confirm the booking.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Brisphere Booking</h1>
      <div style={styles.section}>
        <label>Check-In Date:</label>
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
        />
      </div>
      <div style={styles.section}>
        <label>Check-Out Date:</label>
        <input
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
        />
      </div>
      <div style={styles.section}>
        <label>Rooms:</label>
        <input
          type="number"
          min="1"
          value={rooms}
          onChange={(e) => setRooms(parseInt(e.target.value) || 1)}
          required
        />
      </div>
      <div style={styles.section}>
        <h2>Guest Details</h2>
        <p><strong>Name:</strong> {guestDetails.name}</p>
        <p><strong>Adults:</strong> {guestDetails.adults}</p>
        <p><strong>Children:</strong> {guestDetails.children}</p>
        <p><strong>Email:</strong> {guestDetails.email}</p>
        <p><strong>Phone:</strong> {guestDetails.phone}</p>
      </div>
      <div style={styles.section}>
        <h2>Total Cost: ₹ {totalCost}</h2>
      </div>
      <button style={styles.button} onClick={handleConfirmBooking}>Confirm Booking - ₹ {totalCost}</button>
      {isConfirmed && (
        <div style={styles.confirmation}>
          <h3>Thank you for booking with Brisphere!</h3>
          <p>Your booking details have been sent to {guestDetails.email}.</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: '20px', maxWidth: '500px', margin: 'auto', fontFamily: 'Arial', backgroundColor: '#f9f9f9', borderRadius: '8px' },
  section: { marginBottom: '15px' },
  button: { padding: '10px 20px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' },
  confirmation: { marginTop: '20px', padding: '10px', backgroundColor: '#dff0d8', color: '#3c763d', borderRadius: '5px' }
};

export default BookingForm;

// src/components/BookingForm.js
// import React, { useState } from 'react';
// import { calculateTotalCost } from '../services/bookingService';

// function BookingForm() {
//   const [rooms, setRooms] = useState(1);
//   const [totalCost, setTotalCost] = useState(0);

//   const handleCalculate = () => {
//     setTotalCost(calculateTotalCost(rooms));
//   };

//   return (
//     <div>
//       <h2>Booking Form</h2>
//       <label>Rooms:</label>
//       <input
//         type="number"
//         value={rooms}
//         onChange={(e) => setRooms(parseInt(e.target.value))}
//       />
//       <button onClick={handleCalculate}>Calculate Total Cost</button>
//       <p>Total Cost: ₹ {totalCost}</p>
//     </div>
//   );
// }

// export default BookingForm;
