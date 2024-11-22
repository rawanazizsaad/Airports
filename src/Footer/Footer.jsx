import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure you have Footer.css file for styling
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons from Font Awesome
import LogoIcon from "./fly.jpg"; 

export class Footer extends Component {
  render() {
    return (
      <footer className="Footer" id="Footer">
        <div className="container">
          <div className="row">
            <div className="col" id="company">
            <div className='describe'>
            <img src={LogoIcon}alt="Logo" className="logo" />
              <p className='f_text'>
                We are specialized in viewing <br />
                 " Everything Related to th flights" <br />
                 Check your flight ! <br />
                Don't Forget To Try Our Premium Services ^.^
              </p>
            </div>
              <div className="social">
                {/* Facebook icon */}
                <a href="https://web.facebook.com"><FaFacebook className="social-icon" /></a>
                {/* Instagram icon */}
                <a href="https://www.instagram.com"><FaInstagram className="social-icon" /></a>
                {/* Twitter icon */}
                <a href="https://www.twitter.com"><FaTwitter className="social-icon" /></a>
                {/* LinkedIn icon */}
                <a href="https://www.linkedin.com"><FaLinkedin className="social-icon" /></a>
              </div>
            </div>

            <div className="col" id="services">
              <h3>Services</h3>
              <div className="links">
              <Link to="/">Flight Time</Link>
              <Link to="/">Book a Flight</Link>
              <Link to="/">Search Flight</Link>
            </div>
            </div>

            <div className="col" id="useful-links">
              <h3>Help</h3>
              <div className="links" id="Help">
              <Link to="/FAQs">FAQs</Link>
              <Link to="/privacy-policy">Our Policy</Link>
              <Link to="/terms-of-service">Services </Link>
              </div>
            </div>

            <div className="col" id="contact">
              <h3>Contact</h3>
              <div className="contact-details">
                <i className="fa fa-location"></i>
                <p>Rawan Saad <br /> Egypt</p>
              </div>
              <div className="contact-details">
                <i className="fa fa-phone"></i>
                <p>+20 102 ******</p>
              </div>
            </div>
          </div>

          <div className="row">
          <div className="form">
            <form action={`mailto:rawansaad222222@gmail.com`} method="post" encType="text/plain">
              <input type="text" placeholder="Type your feedback here..." name="feedback" />
              <button className="BTN" type="submit">
                <i className="fa fa-paper-plane"></i> Send
              </button>
            </form>
          </div>
        </div>


        <div className="col-md-12 text-center">
          <p className='copyright'>&copy; 2024 Google Flight. All rights reserved.</p>
        </div>
        
        </div>
      </footer>
    );
  }
}
