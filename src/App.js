import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import './App.css';

function App() {
  const [bookingData, setBookingData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBookingSubmit = (data) => {
    setBookingData(data);
    setIsSubmitted(true);
  };

  const handleNewBooking = () => {
    setBookingData(null);
    setIsSubmitted(false);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Little Lemon</h1>
          <p>Reserve your table for an unforgettable dining experience</p>
        </div>
      </header>

      <main className="container">
        <div className="booking-section">
          {!isSubmitted ? (
            <BookingForm onSubmit={handleBookingSubmit} />
          ) : (
            <BookingConfirmation 
              bookingData={bookingData} 
              onNewBooking={handleNewBooking} 
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
