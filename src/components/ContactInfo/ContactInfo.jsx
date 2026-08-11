import React, { useState } from "react";
import "../ContactInfo/ContactInfo.css";

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    alert("Your message has been submitted successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Left Side */}
 <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt contact-icon"></i>

          <div>
            <h3>Address</h3>
            <p>236 5th SE Avenue, New York NY10000, United States</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-phone-alt contact-icon"></i>

          <div>
            <h3>Phone</h3>
            <p>Mobile: +(84) 546-6789</p>
            <p>Hotline: +(84) 456-6789</p>
          </div>
        </div>

        <div className="contact-item">
          <i className="fas fa-clock contact-icon"></i>

          <div>
            <h3>Working Time</h3>
            <p>Monday–Friday: 9:00 - 22:00</p>
            <p>Saturday–Sunday: 9:00 - 21:00</p>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Abc"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Abc@def.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="This is an optional"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Hi! I'd like to ask about"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
      </div>
    </>
  );
};

export default ContactInfo;