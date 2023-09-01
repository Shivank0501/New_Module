import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';

const FileUpload = () => {
  const history = useHistory();

  const [userPicture, setUserPicture] = useState(null);
  const [petPicture, setPetPicture] = useState(null);
  const [adharPicture, setAdharPicture] = useState(null);
  const [vaccinationPicture, setVaccinationPicture] = useState(null);

  const handleUserPictureChange = (event) => {
    setUserPicture(event.target.files[0]);
  };

  const handleVaccinationPictureChange = (event) => {
    setVaccinationPicture(event.target.files[0]);
  };

  const handlePetPictureChange = (event) => {
    setPetPicture(event.target.files[0]);
  };

  const handleAdharPictureChange = (event) => {
    setAdharPicture(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Create a formData object with uploaded files
    const formData = {
      userPicture,
      petPicture,
      adharPicture,
      vaccinationPicture,
    };

    // Redirect to the ReviewPage and pass the formData as state
    history.push({
      pathname: '/review',
      state: { formData: formData },
    });

    console.log('User Picture:', userPicture);
    console.log('Pet Picture:', petPicture);
    console.log('Adhar Card Picture:', adharPicture);
    console.log('Vaccination Certificate:', vaccinationPicture);
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
      <h2 style={styles.heading}>Upload Pictures</h2>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <div style={styles.formRow}>
          <label style={styles.label}>Upload Your Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={handleUserPictureChange}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Pet Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*"
            onChange={handlePetPictureChange}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Aadhar Card Picture:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*, application/pdf"
            onChange={handleAdharPictureChange}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Upload Vaccination Certificate:</label>
          <input
            style={styles.input}
            type="file"
            accept="image/*, application/pdf"
            onChange={handleVaccinationPictureChange}
           // required
          />
        </div>

        <button style={styles.button} type="submit">
          Next
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
