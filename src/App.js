import logo from './logo.png';  // Import image in React
import React from 'react';
import './cleenhearts.css';


function App() {
  return (
    
    <div    className = "App">
    <header className = "header">
    <div    className = "logo">
    <img    src       = {logo} alt = "Real Happiness of Life Foundation" />
        </div>
        <nav className = "nav-menu">
          <ul>
            <li><a href = "/" className = "active">Home</a></li>
            <li><a href = "/about">About Us</a></li>
            <li><a href = "/programmes">Programmes</a></li>
            <li><a href = "/clinics">Our Clinics</a></li>
            <li><a href = "/get-involved">Get Involved</a></li>
            <li><a href = "/media">Media</a></li>
            <li><a href = "/contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className = "donate-button">
        <a   href      = "/donate" className = "donate">Donate Now</a>
        </div>
      </header>
      <div className = "abc-section">
          <img 
            src       = "abc.png"
            alt       = "abcd"
            className = "abc-image"
          /></div>
      <div className = "abcd-section">
          <img 
            src       = "abcd.png"
            alt       = "abcd"
            className = "abcd-image"
          />
        <div className = "buttons-container">
          {/* Donate Button */}
          <div    className = "btn-donate">
          <button className = "donate-button">
          <img    src       = "hand.png" alt = "hand" className = "hand" />
          <p      className = "regular-text">I want to</p>
          <p      className = "bold-text">Donate</p>
          <p      className = "bold">Spread smiles by</p>
          <p      className = "bolda">investing your time</p>

            </button>
          </div>
          {/* Volunteer Button */}
          <div    className = "btn-donate">
          <button className = "donate-button">
          <img    src       = "Volunteer.png" alt = "hand" className = "hand" />
          <p      className = "regular-text">I want to</p>
          <p      className = "bold-texta">Volunteer</p>
          <p      className = "bold">Spread smiles by</p>
          <p      className = "bolda">investing your time</p>
          {/* Get in touch Button*/}

            </button>
          </div>
          <div    className = "btn-donate">
          <button className = "donate-button">
          <img    src       = "chat.png" alt = "hand" className = "hand" />
          <p      className = "regular-text">Get in</p>
          <p      className = "bold-texta">touch</p>
          <p      className = "boldb">Our team will contact</p>
          <p      className = "boldaa">you at the earliest</p>
            </button>
          </div>
          {/* Name */}
      <form className = "contact-form">
      <div  className = "input-group">
        <input
          type        = "text"
          name        = "name"
          placeholder = "Name"
          className   = "input-field"
        />
        {/* email */}
        <input
          type        = "email"
          name        = "email"
          placeholder = "Email Address"
          className   = "input-field"
        />
      </div>
       {/* submit */}
      <button type = "submit" className = "contact-button">
        Contact Me
      </button>
    </form>
    </div>
        <div className = "kids-section">
          <img 
            src       = "kids.png"
            alt       = "Kids smiling"
            className = "kids-image"
          />
        </div>
        </div>
    </div> 
    
    
  );
} 

    <div className="dropdown-content">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>


      
export default App;

