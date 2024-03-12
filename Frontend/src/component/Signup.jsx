import React, { useState } from 'react';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
import '/src/component/signup.css';



const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobileNo: '',
    firstName: '',
    lastName: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
   
  const navigate=useNavigate();

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData  = await axios.post('http://localhost:9090/signup', formData).then(res => res.data);
      localStorage.clear();
      localStorage.setItem("user", JSON.stringify(userData));
      alert('Signup successful!');
      navigate('/home')

      
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="page-container">
    <div className="signup-container" >
      <h3>Signup</h3>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="label">Mobile Number:</label>
          <input
            type="text"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="label">First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="label">Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="label">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">Signup</button>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;