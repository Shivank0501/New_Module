// GlobalStateContext.js

import React, { createContext, useContext, useReducer } from 'react';

// Define an initial state
const initialState = {
  formData: {
    title: '',
    name: '',
    adharNumber: '',
    fatherHusbandName: '',
    mobileNumber: '',
    emailAddress: '',
    houseNumber: '',
    streetName: '',
    locality: '',
    landmark: '',
    city: '',
    state: '',
    pincode: '',
    petType: '',
    selectedBreed: '',
    petName: '',
    sex: '',
    age: '',
    purchaseDate: '',
    lastVaccinatedDate: '',
    doctorName: '',
    doctorPhoneNumber: '',
    doctorEmail: '',
    userPicture: null,
    petPicture: null,
    adharPicture: null,
    vaccinationPicture: null,
  },
};

// Create a context and a provider component
const GlobalStateContext = createContext();

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};

export const GlobalStateProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FORM_DATA':
        return {
          ...state,
          formData: { ...state.formData, ...action.payload },
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
