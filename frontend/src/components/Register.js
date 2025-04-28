import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Register({ onRegister }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'Yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAgencyChange = (value) => {
    setFormData({
      ...formData,
      isAgency: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onRegister(formData);
    navigate('/account');
  };

  return (
    <div className="form-container">
      <h1>Create your PopX account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name*</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Phone number*</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="form-group">
          <label>Email address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="form-group">
          <label>Password*</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>
        <div className="form-group">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
          />
        </div>
        <div className="form-group">
          <p>Are you an Agency?</p>
          <div className="radio-options">
            <div className={`radio-option ${formData.isAgency === 'Yes' ? 'selected' : ''}`}>
              <input
                type="radio"
                id="agency-yes"
                name="isAgency"
                checked={formData.isAgency === 'Yes'}
                onChange={() => handleAgencyChange('Yes')}
              />
              <label htmlFor="agency-yes">Yes</label>
            </div>
            <div className={`radio-option ${formData.isAgency === 'No' ? 'selected' : ''}`}>
              <input
                type="radio"
                id="agency-no"
                name="isAgency"
                checked={formData.isAgency === 'No'}
                onChange={() => handleAgencyChange('No')}
              />
              <label htmlFor="agency-no">No</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn-primary">Create Account</button>
      </form>
    </div>
  );
}

export default Register;