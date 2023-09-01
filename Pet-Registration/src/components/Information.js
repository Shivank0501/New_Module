import React from 'react';
import './Info.css';
import { useHistory } from 'react-router-dom';

function Info() {
  const history = useHistory();

  const handleNextClick = () => {
    // Add logic to redirect the user to the next page
    history.push('/application-details'); // Replace '/nextPage' with the actual URL of the next page
  };

  return (
    <div className="info-container">
      <div className="info-content">
        <header className="info-header">
          <h1>Pet Registration</h1>
        </header>
        <section className="info-section">
          <p>We will guide you through a multi-step process.</p>
            
          <p>Please take your time and fill out this form carefully.</p>

          <p>If you lose network connectivity or need to take a break, you can return later and continue from where you left off.</p>

          <h2>Before You Start</h2>
          <p>Scans or photos of the following documents are mandatory to complete the application:</p>
          <ul>
            <li>Your Photo</li>
            <li>Pet Photo</li>
            <li>Aadhar Card</li>
            <li>Vaccination Certificate</li>
          </ul>
        </section>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Info;
