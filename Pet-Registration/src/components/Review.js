import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';
import { useGlobalState } from './GlobalStateContext';

const ReviewPage = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(5);
  const { state } = useGlobalState(); // Use Globalstate to retrieve the form data

  // Destructure form data from global state
  const { formData } = state;

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(5);

    // Handle form submission logic here (e.g., sending data to a server)

    // Redirect to the next page
    history.push('/success');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '115vh',
      background: '#f1f1f1',
      padding: '20px',
      overflow: 'auto',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
      textAlign: 'center',
    },
    reviewContainer: {
      width: '100%',
      maxWidth: '600px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      padding: '25px',
      marginBottom: '20px',
    },
    detailItem: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
    },
    label: {
      fontWeight: 'bold',
      marginRight: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <Timeline activeStep={activeStep} />
      <div style={styles.reviewContainer}>
        <h2 style={styles.heading}>Review Your Information</h2>
        <div style={styles.detailItem}>
          <span style={styles.label}>Title:</span>
          <span>{formData.title}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Full Name:</span>
          <span>{formData.name}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Aadhar Number:</span>
          <span>{formData.adharNumber}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Father/Husband Name:</span>
          <span>{formData.fatherHusbandName}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Mobile Number:</span>
          <span>{formData.mobileNumber}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Email Address:</span>
          <span>{formData.emailAddress}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>House Number:</span>
          <span>{formData.houseNumber}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Street Name:</span>
          <span>{formData.streetName}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Locality:</span>
          <span>{formData.locality}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Landmark:</span>
          <span>{formData.landmark}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>City:</span>
          <span>{formData.city}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>State:</span>
          <span>{formData.state}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Pincode:</span>
          <span>{formData.pincode}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Pet Type:</span>
          <span>{formData.petType}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Breed:</span>
          <span>{formData.selectedBreed}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Pet Name:</span>
          <span>{formData.petName}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Sex:</span>
          <span>{formData.sex}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Age:</span>
          <span>{formData.age}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Purchase Date:</span>
          <span>{formData.purchaseDate}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Last Vaccinated Date:</span>
          <span>{formData.lastVaccinatedDate}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Doctor Name:</span>
          <span>{formData.doctorName}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Doctor Phone Number:</span>
          <span>{formData.doctorPhoneNumber}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Doctor Email:</span>
          <span>{formData.doctorEmail}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Upload Your Picture:</span>
          <span>{formData.userPicture.name}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Upload Pet Picture:</span>
          <span>{formData.petPicture.name}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Upload Aadhar Card Picture:</span>
          <span>{formData.adharPicture.name}</span>
        </div>
        <div style={styles.detailItem}>
          <span style={styles.label}>Upload Vaccination Certificate:</span>
          <span>{formData.vaccinationPicture.name}</span>
        </div>
        <button className="submit-bar SubmitBarInCardInDesktopView" type="button" onClick={handleNextClick}>
          <header>Next</header>
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
