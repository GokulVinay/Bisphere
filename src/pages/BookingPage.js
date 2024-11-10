// src/pages/BookingPage.js
import React from 'react';
import BookingForm from '../components/BookingForm';
import GuestDetails from '../components/GuestDetails';

function BookingPage() {
  return (
    <div>
      <h1>Welcome to Brisphere Booking</h1>
      <BookingForm />
      <GuestDetails />
    </div>
  );
}

export default BookingPage;
