import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';
import '../index.css';
import { useGlobalState } from './GlobalStateContext';

const FileUpload = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(4);
  const { state, dispatch } = useGlobalState(); // Use Globalstate to maintain the form data

  // Destructure form data from global state
  const { formData } = state;

  const handleUserPictureChange = (event) => {
    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: {
        ...formData,
        userPicture: event.target.files[0],
      },
    });
  };

  const handlePetPictureChange = (event) => {
    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: {
        ...formData,
        petPicture: event.target.files[0],
      },
    });
  };

  const handleAdharPictureChange = (event) => {
    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: {
        ...formData,
        adharPicture: event.target.files[0],
      },
    });
  };

  const handleVaccinationPictureChange = (event) => {
    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: {
        ...formData,
        vaccinationPicture: event.target.files[0],
      },
    });
  };

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(4);

    // Redirect to the next page
    history.push('/review');
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
    form: {
      width: '100%',
      maxWidth: '600px',
      padding: '25px',
      background: '#fff',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    formRow: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '20px',
    },
    label: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
    },
    select: {
      width: '100%',
      padding: '12px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      fontSize: '14px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <Timeline activeStep={activeStep} />
      <form style={styles.form} >
        <div style={styles.formRow}>
          <label style={styles.label}>Upload Your Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={handleUserPictureChange}
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Pet Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={handlePetPictureChange}
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Aadhar Card Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*, application/pdf"
            onChange={handleAdharPictureChange}
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Vaccination Certificate:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*, application/pdf"
            onChange={handleVaccinationPictureChange}
            required
          />
        </div>

        <button className="submit-bar SubmitBarInCardInDesktopView"  type="button" onClick={handleNextClick}>
        
          <header>Next</header>

        </button>
      </form>
    </div>
  );
};

export default FileUpload;
