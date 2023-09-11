import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';
import '../index.css';
import { useGlobalState } from './GlobalStateContext';

const ApplicationDetails = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(1);
  const { state, dispatch } = useGlobalState(); // Use Globalstate to maintain the form data

  // Destructure form data from global state
  const { formData } = state;

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(2);

    // Form Validation
    if (!validateForm()) {
      return;
    }

    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: formData,
    });

    // Redirect to the next page
    history.push('/address-contact');
  };

  const validateForm = () => {
   

    // Check if Aadhar number is exactly 12 digits
    if (formData.adharNumber.length !== 12 || !/^\d+$/.test(formData.adharNumber)) {
      alert('Please enter a valid 12-digit Aadhar number.');
      return false;
    }

    // Check if mobile number is exactly 10 digits
    if (formData.mobileNumber.length !== 10 || !/^\d+$/.test(formData.mobileNumber)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }

    // Add more validation checks for other fields as needed

    return true;
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
      <form style={styles.form}>
        <div style={styles.formRow}>
          <label style={styles.label}>Title:</label>
          <select
            style={styles.select}
            value={formData.title}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  title: e.target.value,
                },
              })
            }
            required
          >
            
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
          </select>
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Full Name:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.name}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  name: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Aadhar Number:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.adharNumber}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  adharNumber: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Father/Husband Name:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.fatherHusbandName}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  fatherHusbandName: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Mobile Number:</label>
          <input
            style={styles.input}
            type="tel"
            value={formData.mobileNumber}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  mobileNumber: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Email Address:</label>
          <input
            style={styles.input}
            type="email"
            value={formData.emailAddress}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  emailAddress: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <button
          className="submit-bar SubmitBarInCardInDesktopView"
          type="button"
          onClick={handleNextClick}
        >
          <header>Next</header>
        </button>
      </form>
    </div>
  );
};

export default ApplicationDetails;