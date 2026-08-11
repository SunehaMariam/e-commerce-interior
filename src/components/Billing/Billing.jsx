import React from "react";
import "./Billing.css";

const Billing = ({ formData, handleChange }) => {
  return (
    <div className="billing">

      <h1>Billing details</h1>

      <div className="name-row">

        <div className="input-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="input-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="input-group">
        <label>Company Name (Optional)</label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Country / Region</label>

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="India">India</option>
        </select>
      </div>

      <div className="input-group">
        <label>Street Address</label>

        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Town / City</label>

        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Province</label>

        <select
          name="province"
          value={formData.province}
          onChange={handleChange}
        >
          <option value="">Select Province</option>
          <option value="Punjab">Punjab</option>
          <option value="Sindh">Sindh</option>
          <option value="KPK">KPK</option>
          <option value="Balochistan">Balochistan</option>
        </select>
      </div>

      <div className="input-group">
        <label>ZIP Code</label>

        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Phone</label>

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label>Email Address</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      </div>
  );
};

export default Billing;
   