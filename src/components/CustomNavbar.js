// CustomNavbar.js
import React, { useState, useEffect, useRef } from 'react';
import './CustomNavbar.css';

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [number, setNumber] = useState('');
  const [image, setImage] = useState(null);
  const [fullNameError, setFullNameError] = useState('');
  const [numberError, setNumberError] = useState('');
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setFullName('');
    setNumber('');
    setImage(null);
    setFullNameError('');
    setNumberError('');
  };

  const openModal = () => {
    setShowModal(true);
  };

 // CustomNavbar.js - Updated handleSubmit function

 const handleSubmit = async (e) => {
  e.preventDefault();

  // Validation code remains the same

  if (!fullNameError && !numberError && image) {
    try {
      console.log('Submitting the following data:', {
        fullName,
        number,
        // ... other form data you want to send
      });

      const response = await fetch('YOUR_BACKEND_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          number,
          // ... other form data you want to send
        }),
      });

      if (response.ok) {
        closeModal();
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }
};

  return (
    <nav className="navbar">
      <div className="navbar__logo">Family Generation</div>

      <div className="navbar__links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Family</a></li>
        </ul>
      </div>

      <div className="navbar__buttons">
        {/* Bind openModal to button onClick event */}
        <button className="navbar__login" onClick={openModal}>
          Submit Credentials
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Submit Credentials</h2>
            <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Full Name"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
    />
    {fullNameError && <p className="error">{fullNameError}</p>}
    <input
      type="text"
      placeholder="Number"
      value={number}
      onChange={(e) => setNumber(e.target.value)}
    />
    {numberError && <p className="error">{numberError}</p>}
    <input
      type="file"
      accept="image/*"
      onChange={(e) => setImage(e.target.files[0])}
    />
    <input
      type="submit"
      value="Submit"
      className="submit-btn"
      disabled={!!(fullNameError || numberError || !image)}
    />
  </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
