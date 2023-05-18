import React, { useState, createContext, useRef } from 'react';

const FormDataContext = createContext();

const FormDataProvider = ({ children }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    title: '',
    address: '',
    phoneNumber: '',
    email: '',
    description: '',
    position: '',
    company: '',
    city: '',
    jobFrom: '',
    jobTo: '',
    jobDescription: '',
    universityName: '',
    educationCity: '',
    degree: '',
    educFrom: '',
    educTo: '',
    githubLink: '',
    portfolioLink: '',
  };

  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLoadExample = () => {
    setFormData({
      firstName: 'Brian Shaw',
      lastName: 'Boulevard',
      title: 'Software',
      address: 'Chicago USA',
      phoneNumber: '555-555',
      email: 'brianshaw@gmail.com',
      description: 'Just a simple description about brian shaw',
      position: 'Software Engineer',
      company: 'Offshorly Ltd.',
      city: 'Quezon City, Manila',
      jobFrom: 'Oct 2321',
      jobTo: ' Nov 2123',
      jobDescription: 'Did something like like',
      universityName: 'Far Eastern University',
      educationCity: 'Quezon City, Manila',
      degree: 'BS Computer Science',
      educFrom: 'Jan 2021',
      educTo: ' Aug 2025',
      githubLink: '',
      portfolioLink: '',
    })}

    const handleReset = () =>{
      setFormData(initialState)
    }
    
    let componentRef = useRef(null)


  return (
    <FormDataContext.Provider value={{ formData, handleInputChange, handleLoadExample, handleReset, componentRef }}>
      {children}
    </FormDataContext.Provider>
  );
};





export { FormDataContext, FormDataProvider };
