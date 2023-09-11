import React from 'react';
//import './Info.css';
import '../index.css';
import { useHistory } from 'react-router-dom';

function Info() {
  const history = useHistory();

  const isAuthenticated = /* Replace with your actual authentication logic here (e.g., check if the user is logged in) */ true;

  const handleNextClick = () => {
    if (isAuthenticated) {
      // User is authenticated, redirect to the next page
      history.push('/application-details'); // Replace with your next page URL
    } else {
      // User is not authenticated, redirect to the login page
      history.push('/login'); // Replace with your login page URL
    }
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
            
            <li>1. Pet Photo</li> 
            <li>2. Adhar Card</li>
            <li>3. Vaccination Certificate</li>
            <li>4. Your Photo</li>
            
           
          </ul>
        </section>

        <button className="submit-bar SubmitBarInCardInDesktopView" onClick={handleNextClick}>
          <header>Next</header>
        </button>
        
      </div>
    </div>
  );
}

export default Info;
