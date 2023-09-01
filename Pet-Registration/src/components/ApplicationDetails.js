import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Timeline from './Timeline';

const ApplicationDetails = () => {
  const history = useHistory();

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [adharNumber, setAdharNumber] = useState('');
  const [fatherHusbandName, setFatherHusbandName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    // Redirect to the next page
    history.push('/address-contact');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '115vh',
      background: '#f3e2e2',
      overflow: 'auto',
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
    select: {
      flex: '2',
      width: '100%',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      outline: 'none',
      cursor: 'pointer',
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
    /*info {
      text-align: "center",
      backgroundColor : "#ffffff",
      borderRadius: "10px",
      box-shadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "30px",
      max-width: "800px",
      width: "90%",
    },*/
  };

  return (
    <div style={styles.container}>.
    <Timeline />
    
    
      
    

    
      <h2 style={styles.heading}>Welcome to Pet Registration</h2>
      <h3 style={{ color: '#666', marginBottom: '20px' }}>Personal Details</h3>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <div style={styles.formRow}>

          <label style={styles.label}>Title:</label>
          <select
            style={styles.select}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Adhar Number:</label>
          <input
            style={styles.input}
            type="text"
            value={adharNumber}
            onChange={(e) => setAdharNumber(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Father/Husband Name:</label>
          <input
            style={styles.input}
            type="text"
            value={fatherHusbandName}
            onChange={(e) => setFatherHusbandName(e.target.value)}
          />
        </div>

        <div style={styles.formRow}>
        <label style={styles.label}>Mobile Number:</label>
        <input
          style={styles.input}
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          //required
        />
        </div>

        <div style={styles.formRow}>
        <label style={styles.label}>Email Address:</label>
        <input
          style={styles.input}
          type="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          //required
        />
        </div>

        <button style={styles.button} type="submit">
          Next
        </button>
      </form>
    </div>
    
  
  );
};

export default ApplicationDetails;
