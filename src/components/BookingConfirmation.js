import React from 'react';

const BookingConfirmation = ({ bookingData, onNewBooking }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString) => {
    return timeString;
  };

  return (
    <div className="booking-confirmation">
      <div className="success-message">
        <h2 style={{ color: '#155724', marginBottom: '1rem' }}>
          🎉 Booking Confirmed!
        </h2>
        <p>Thank you for choosing Little Lemon. Your table has been successfully reserved.</p>
      </div>

      <div className="booking-details">
        <h3>Booking Details</h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <p><strong>Booking Reference:</strong> {bookingData.bookingReference}</p>
            <p><strong>Name:</strong> {bookingData.firstName} {bookingData.lastName}</p>
            <p><strong>Email:</strong> {bookingData.email}</p>
            <p><strong>Phone:</strong> {bookingData.phone}</p>
          </div>
          <div>
            <p><strong>Date:</strong> {formatDate(bookingData.date)}</p>
            <p><strong>Time:</strong> {formatTime(bookingData.time)}</p>
            <p><strong>Guests:</strong> {bookingData.guests} {bookingData.guests === 1 ? 'Guest' : 'Guests'}</p>
            {bookingData.occasion && <p><strong>Occasion:</strong> {bookingData.occasion}</p>}
          </div>
        </div>

        {bookingData.specialRequests && (
          <div style={{ marginTop: '1rem' }}>
            <p><strong>Special Requests:</strong></p>
            <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>
              {bookingData.specialRequests}
            </p>
          </div>
        )}

        <div style={{ 
          background: '#e3f2fd', 
          padding: '1rem', 
          borderRadius: '8px', 
          marginTop: '1.5rem',
          border: '1px solid #bbdefb'
        }}>
          <h4 style={{ color: '#1976d2', marginBottom: '0.5rem' }}>Important Information:</h4>
          <ul style={{ marginLeft: '1.5rem', color: '#333' }}>
            <li>Please arrive 5 minutes before your reservation time</li>
            <li>We will hold your table for 15 minutes past your reservation time</li>
            <li>For any changes or cancellations, please call us at (555) 123-4567</li>
            <li>A confirmation email has been sent to {bookingData.email}</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button 
          onClick={onNewBooking}
          className="submit-btn"
          style={{ 
            background: 'linear-gradient(135deg, #6c757d, #495057)',
            marginRight: '1rem'
          }}
        >
          Make Another Booking
        </button>
        <button 
          onClick={() => window.print()}
          className="submit-btn"
          style={{ 
            background: 'linear-gradient(135deg, #28a745, #20c997)'
          }}
        >
          Print Confirmation
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
