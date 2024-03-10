import React, { useState, } from 'react';
import { Link } from 'react-router-dom'; // Import Link and useHistory from react-router-dom
import axios from 'axios';
import '/src/component/login.css';
import { useNavigate } from 'react-router-dom';



const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
   const navigate=useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:9090/verifyUser', formData);
        if (response.data) {
          alert('Login successful');
          navigate('/home')

        } else {
          alert('Invalid email or password');
        }
      } catch (error) {
        console.error('Login error:', error);
      }
  };

  return (
    <div className="page-container">
    <div className="login-container" >
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <div className="signup-link">
        <p>Don't have an account? <Link to="/Signup">Sign up</Link></p>
      </div>
    </div>
    </div>
  );
};

    

export default LoginForm;
