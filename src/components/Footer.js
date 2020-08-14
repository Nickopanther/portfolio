import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="page-footer green darken-4">
    <div className="container">
      <div className="row">

        {/* Links */}
        <div className="col s12 m4 l4">
          <h5 className="white-text">Links</h5>
            <ul className="footer-links">
                <li><ScrollToTop><Link to="/" className="white-text text-lighten-3">Home</Link></ScrollToTop></li>
                <li><ScrollToTop><Link to="/about-me" className="about white-text text-lighten-3">About Me</Link></ScrollToTop></li>
                <li><ScrollToTop><Link to="/alexa-skills" className="white-text text-lighten-3">Alexa Skills</Link></ScrollToTop></li>
                <li><ScrollToTop><Link to="/videos" className="white-text text-lighten-3">Videos</Link></ScrollToTop></li>
                <li><ScrollToTop><Link to="/websites" className="white-text text-lighten-3">Websites</Link></ScrollToTop></li>
                <li><ScrollToTop><Link to="/contact-me" className="white-text text-lighten-3">Contact Me</Link></ScrollToTop></li>
            </ul>
        </div>

        {/* Contact */}
        <div className="col s12 m4 l4">
          <h5 className="white-text">Contact</h5>
            <ul className="contact-icons footer-links">
                <li className="font-awesome-icon">
                  <a className="white-text text-lighten-3" href="tel:+16104067987" title="Phone Number">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </a>
                </li>
                <li className="font-awesome-icon">
                  <a className="white-text text-lighten-3" href="mailto:nickoazzarello@gmail.com" title="Email Address">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
            </ul>
        </div>

        {/* Social Media */}
        <div className="col s12 m4 l4">
          <h5 className="white-text">Connect With Me</h5>
          <ul className="social-media-icons footer-links">
            <li className="font-awesome-icon">
               <a className="white-text text-lighten-3" href="https://www.facebook.com/nicko.azzarello" target="_blank" rel="noopener noreferrer" title="Facebook">
                 <FontAwesomeIcon icon={faFacebook} />
               </a>
            </li>
            <li className="font-awesome-icon">
              <a className="white-text text-lighten-3" href="https://www.linkedin.com/in/nicholas-azzarello-36b405b2/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="font-awesome-icon">
              <a className="white-text text-lighten-3" href="https://www.instagram.com/nicko_azzarello/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="font-awesome-icon">
              <a className="white-text text-lighten-3" href="https://www.youtube.com/channel/UCdZzMgx3JF9xI6U-ksZMvWg?view_as=subscriber" target="_blank" rel="noopener noreferrer" title="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li className="font-awesome-icon">
              <a className="white-text text-lighten-3" href="https://www.tiktok.com/@nicko_azzarello?lang=en" target="_blank" rel="noopener noreferrer" title="TikTok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
    <div className="footer-copyright indigo darken-4">
      <div className="container center-align">
        <p className="privacy-policy">&copy; 2020 Nick Azzarello, All rights reserved | <Link to="/privacy-policy" className="white-text">Privacy Policy</Link></p>
      </div>
    </div>
  </footer>
)
}

export default Footer;
