import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
      <header>
        <nav className="nav-wrapper indigo darken-3">
            <div className="container">

                <NavLink to="/" className="brand-logo">Nick Azzarello</NavLink>
                  <NavLink to="#" className="sidenav-trigger" data-target="mobile-links">
                    <i className="material-icons">menu</i>
                  </NavLink>

                <ul className="nav-links right hide-on-med-and-down">
                    <li><NavLink to="/about-me">About Me</NavLink></li>
                    <li><NavLink to="/videos">Videos</NavLink></li>
                    <li><NavLink to="/websites">Websites</NavLink></li>
                    <li><NavLink to="/alexa-skills">Alexa Skills</NavLink></li>
                    <li><NavLink to="/contact-me">Contact Me</NavLink></li>
                </ul>

                <div className="sidenav" id="mobile-links">

                {/* Links */}
                <ul className="nav-links">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/about-me">About Me</NavLink></li>
                  <li><NavLink to="/videos">Videos</NavLink></li>
                  <li><NavLink to="/websites">Websites</NavLink></li>
                  <li><NavLink to="/alexa-skills">Alexa Skills</NavLink></li>
                  <li><NavLink to="/contact-me">Contact Me</NavLink></li>
                </ul>

                <br />

                {/* Contact */}
                  <ul className="contact-icons-mobile">
                      <li className="font-awesome-icon">
                        <a href="tel:+16104067987" title="Phone Number">
                          <FontAwesomeIcon icon={faPhoneAlt} />
                        </a>
                      </li>
                      <li className="font-awesome-icon">
                        <a href="mailto:nickoazzarello@gmail.com" title="Email Address">
                          <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                      </li>
                  </ul>

                <br />

                {/* Social Media */}
                <ul className="social-media-icons-mobile">
                  <li className="font-awesome-icon">
                     <a href="https://www.facebook.com/nicko.azzarello" target="_blank" rel="noopener noreferrer" title="Facebook">
                       <FontAwesomeIcon icon={faFacebook} />
                     </a>
                  </li>
                  <li className="font-awesome-icon">
                    <a href="https://www.linkedin.com/in/nicholas-azzarello-36b405b2/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li className="font-awesome-icon">
                    <a href="https://www.instagram.com/nicko_azzarello/" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li className="font-awesome-icon">
                    <a href="https://www.youtube.com/channel/UCdZzMgx3JF9xI6U-ksZMvWg?view_as=subscriber" rel="noopener noreferrer" target="_blank" title="YouTube">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                  <li className="font-awesome-icon">
                    <a className="tiktok icons" href="https://www.tiktok.com/@nicko_azzarello?lang=en" target="_blank" rel="noopener noreferrer" title="TikTok">
                      <FontAwesomeIcon icon={faTiktok} />
                    </a>
                  </li>
                </ul>

              </div>
            </div>
        </nav>
      </header>
    )
}

export default Navbar;
