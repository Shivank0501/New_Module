import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App'; // Import your main App component
import './index.css';
//import FormComposer from './components/FormComposer';
//import Config from './pages/config';

ReactDOM.render(
  <BrowserRouter>
    <App />
   
  </BrowserRouter>,


  document.getElementById('root')
);
