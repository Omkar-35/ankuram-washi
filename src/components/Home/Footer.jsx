import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#home">Admissions</a></li>
          <li><a href="#home">Academics</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#image">Campus</a></li>
          <li><a href="#annual-day">Gallery</a></li>
          <li><a href="#staff">Staff</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contact Info</h4>
        <p>Ankuram Vidya Mandir</p>
        <p>Shivtirth, Washi, Dharashiv, 413503</p>
        <p>📞 +91 9503358251</p>
      </div>

      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/9503358251" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="ankuramvidyamandir@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
