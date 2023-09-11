import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';
import '../index.css';
import { useGlobalState } from './GlobalStateContext';

const PetDetails = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(3);
  const { state, dispatch } = useGlobalState(); // Use Globalstate to maintain the form data

  // Destructure form data from global state
  const { formData } = state;

  const handleNextClick = (event) => {
    event.preventDefault();
    setActiveStep(4);

    // Form Validation
    if (!validateForm()) {
      return;
    }

    dispatch({
      type: 'UPDATE_FORM_DATA',
      payload: formData,
    });

    // Redirect to the next page
    history.push('/file-upload');
  };

  const validateForm = () => {
    // Add your form validation logic here

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
          <label style={styles.label}>Pet Type:</label>
          <select
            style={styles.select}
            value={formData.petType}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  petType: e.target.value,
                },
              })
            }
            required
          >
            <option value="">Select Pet Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        {formData.petType === 'cat' && (
          <div style={styles.formRow}>
            <label style={styles.label}>Breed:</label>
            <select
              style={styles.select}
              value={formData.selectedBreed}
              onChange={(e) =>
                dispatch({
                  type: 'UPDATE_FORM_DATA',
                  payload: {
                    ...formData,
                    selectedBreed: e.target.value,
                  },
                })
              }
              required
            >
              <option value="">Select Breed</option>
              <option value="Bombay Cat">Bombay Cat</option>
              <option value="Himalayan Cat">Himalayan Cat</option>
              <option value="Siamese Cat">Siamese Cat</option>
              {/* Add more cat breed options here */}
            </select>
          </div>
        )}

        {formData.petType === 'dog' && (
          <div style={styles.formRow}>
            <label style={styles.label}>Breed:</label>
            <select
              style={styles.select}
              value={formData.selectedBreed}
              onChange={(e) =>
                dispatch({
                  type: 'UPDATE_FORM_DATA',
                  payload: {
                    ...formData,
                    selectedBreed: e.target.value,
                  },
                })
              }
              required
            >
              <option value="">Select Breed</option>
              <option value="Labrador Retriever">Labrador Retriever</option>
              <option value="German Shepherd">German Shepherd</option>
              <option value="Golden Retriever">Golden Retriever</option>
              {/* Add more dog breed options here */}
            </select>
          </div>
        )}

        <div style={styles.formRow}>
          <label style={styles.label}>Pet Name:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.petName}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  petName: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Sex:</label>
          <select
            style={styles.select}
            value={formData.sex}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  sex: e.target.value,
                },
              })
            }
            required
          >
            <option value="">Select Sex</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Age:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.age}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  age: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Purchase Date:</label>
          <input
            style={styles.input}
            type="date"
            value={formData.purchaseDate}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  purchaseDate: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Last Vaccinated Date:</label>
          <input
            style={styles.input}
            type="date"
            value={formData.lastVaccinatedDate}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  lastVaccinatedDate: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Name:</label>
          <input
            style={styles.input}
            type="text"
            value={formData.doctorName}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  doctorName: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Phone Number:</label>
          <input
            style={styles.input}
            type="tel"
            value={formData.doctorPhoneNumber}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  doctorPhoneNumber: e.target.value,
                },
              })
            }
            required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Email:</label>
          <input
            style={styles.input}
            type="email"
            value={formData.doctorEmail}
            onChange={(e) =>
              dispatch({
                type: 'UPDATE_FORM_DATA',
                payload: {
                  ...formData,
                  doctorEmail: e.target.value,
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

export default PetDetails;
