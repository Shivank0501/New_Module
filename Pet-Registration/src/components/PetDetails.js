import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Timeline from './Timeline';
//import './Timeline.css';

const PetDetailPage = () => {
  const history = useHistory();

  const [petType, setPetType] = useState('');
  const [petName, setPetName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');
  const [lastVaccinatedDate, setLastVaccinatedDate] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [doctorPhoneNumber, setDoctorPhoneNumber] = useState('');
  const [doctorEmail, setDoctorEmail] = useState('');

  const [breedOptions, setBreedOptions] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');

  const handlePetTypeChange = (e) => {
    setPetType(e.target.value);
    setSelectedBreed('');

    if (e.target.value === 'dog') {
      setBreedOptions([
        'Labrador Retriever',
        'German Shepherd',
        'Golden Retriever',
        // Add more dog breeds here
      ]);
    } else if (e.target.value === 'cat') {
      setBreedOptions([
        'Bombay Cat',
        'Himalayan Cat',
        'Siamese Cat',
        // Add more cat breeds here
      ]);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    history.push('/file-upload');
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '135vh', // You can adjust the height as needed
      background: '#f3e2e2',
      overflow: 'auto', // Enable scrolling
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
  };

  return (
    <div style={styles.container}>
    <Timeline />
      <h2 style={styles.heading}>Pet Details</h2>
      <form style={styles.form} onSubmit={handleFormSubmit}>
        <div style={styles.formRow}>
          <label style={styles.label}>Pet Type:</label>
          <select
            style={styles.select}
            value={petType}
            onChange={handlePetTypeChange}
           // required
          >
            <option value="">Select Pet Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
        </div>

        {petType && (
          <div style={styles.formRow}>
            <label style={styles.label}>Breed:</label>
            <select
              style={styles.select}
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
              //required
            >
              <option value="">Select Breed</option>
              {breedOptions.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
        )}

        <div style={styles.formRow}>
          <label style={styles.label}>Pet Name:</label>
          <input
            style={styles.input}
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
           // required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Sex:</label>
          <select
            style={styles.select}
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            //required
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Purchase Date:</label>
          <input
            style={styles.input}
            type="date"
            value={purchaseDate}
            onChange={(e) => setPurchaseDate(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Last Vaccinated Date:</label>
          <input
            style={styles.input}
            type="date"
            value={lastVaccinatedDate}
            onChange={(e) => setLastVaccinatedDate(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Name:</label>
          <input
            style={styles.input}
            type="text"
            value={doctorName}
            onChange={(e) => setDoctorName(e.target.value)}
            //required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Phone Number:</label>
          <input
            style={styles.input}
            type="tel"
            value={doctorPhoneNumber}
            onChange={(e) => setDoctorPhoneNumber(e.target.value)}
           // required
          />
        </div>

        <div style={styles.formRow}>
          <label style={styles.label}>Doctor Email:</label>
          <input
            style={styles.input}
            type="email"
            value={doctorEmail}
            onChange={(e) => setDoctorEmail(e.target.value)}
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

export default PetDetailPage;
