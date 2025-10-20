# Little Lemon Table Booking System

A simple and elegant React-based table booking system for the Little Lemon restaurant website.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Form Validation**: Comprehensive client-side validation for all required fields
- **Booking Confirmation**: Detailed confirmation page with booking reference
- **Modern UI**: Beautiful gradient design with smooth animations
- **Accessibility**: Proper form labels and keyboard navigation support

## Booking Form Fields

- **Personal Information**: First name, last name, email, phone number
- **Reservation Details**: Date, time, number of guests
- **Additional Options**: Occasion selection, special requests
- **Real-time Validation**: Instant feedback on form errors

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd little-lemon-booking
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── BookingForm.js          # Main booking form component
│   └── BookingConfirmation.js  # Confirmation page component
├── App.js                      # Main application component
├── App.css                     # Application-specific styles
├── index.js                    # Application entry point
└── index.css                   # Global styles
```

## Features in Detail

### Form Validation
- Required field validation
- Email format validation
- Date validation (prevents past dates)
- Phone number validation
- Real-time error display

### User Experience
- Smooth animations and transitions
- Responsive grid layout
- Clear visual feedback
- Intuitive form flow
- Print-friendly confirmation page

### Styling
- Modern gradient design
- Consistent color scheme
- Mobile-first responsive design
- Clean typography
- Accessible contrast ratios

## Customization

The application is designed to be easily customizable:

- **Colors**: Modify the CSS variables in `src/index.css`
- **Time Slots**: Update the `timeSlots` array in `BookingForm.js`
- **Form Fields**: Add or remove fields in the form component
- **Validation Rules**: Modify the `validateForm` function
- **Styling**: Update the CSS classes and styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.
