import React from 'react';
import './Navbar.css';
import 'bootstrap';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <div className="social-icons">
        <a className="facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a className='instagram' href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a className='whatsapp' href="https://wa.me/9503358251" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a className='email' href="mailto:info@ankuram.com"><FaEnvelope /></a>
      </div>

      {/* Custom Hamburger Button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#schoolNavbar"
        aria-controls="schoolNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-line"></span>
        <span className="navbar-toggler-line"></span>
        <span className="navbar-toggler-line"></span>
      </button>

      <div className="collapse navbar-collapse" id="schoolNavbar">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#home">Academics</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#home">Admissions</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#image">Campus</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#annual-day">Gallery</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#footer">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
