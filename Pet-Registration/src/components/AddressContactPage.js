import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';

const AddressContactPage = () => {
  const history = useHistory();

  const [houseNumber, setHouseNumber] = useState('');
  const [streetName, setStreetName] = useState('');
  const [locality, setLocality] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    // Redirect to the next page
    history.push('/pet-details');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: '#f3e2e2',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
    },
    form: {
      width: '80%',
      maxWidth: '600px',
    },
    formRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '15px',
    },
    label: {
      flex: '1',
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#333',
    },
    input: {
      flex: '2',
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#ec6161',
      color: '#ffffff',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <Timeline />
      <h2 style={styles.heading}>Address Details</h2>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <div style={styles.formRow}>
          <label style={styles.label}>House Number:</label>
          <input
            style={styles.input}
            type="text"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Street Name:</label>
          <input
            style={styles.input}
            type="text"
            value={streetName}
            onChange={(e) => setStreetName(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Locality:</label>
          <input
            style={styles.input}
            type="text"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Landmark:</label>
          <input
            style={styles.input}
            type="text"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>City:</label>
          <input
            style={styles.input}
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>State:</label>
          <input
            style={styles.input}
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Pincode:</label>
          <input
            style={styles.input}
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>

        <button style={styles.button} type="submit">
          NEXT
        </button>
      </form>
    </div>
  );
};

export default AddressContactPage;
