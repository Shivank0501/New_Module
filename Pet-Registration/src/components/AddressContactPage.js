import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';
import '../index.css';
import { useGlobalState } from './GlobalStateContext';

const AddressContactPage = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(2);
  const { state, dispatch } = useGlobalState(); // Use Globalstate to maintain the form data

  // Destructure form data from global state
  const { formData } = state;

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(3);

    // Form Validation
    if (!validateForm()) {
      return;
    }

    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: formData,
    });

    // Redirect to the next page
    history.push('/pet-details');
  };

  const validateForm = () => {
    // Implement form validation logic here

    // Check if pincode is exactly 6 digits
    if (formData.pincode.length !== 6 || !/^\d+$/.test(formData.pincode)) {
      alert('Please enter a valid 6-digit pincode.');
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
          <label style={styles.label}>House Number:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.houseNumber}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  houseNumber: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Street Name:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.streetName}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  streetName: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Locality:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.locality}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  locality: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Landmark:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.landmark}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  landmark: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>City:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.city}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  city: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>State:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.state}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  state: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Pincode:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.pincode}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  pincode: e.target.value,
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

export default AddressContactPage;
