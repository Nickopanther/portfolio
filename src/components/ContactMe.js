import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
    return (
        <div className="container content">
            <Helmet>
                <title>Contact Me - Nick Azzarello</title>
                <meta name="description" content="testing react helmet" />
                <meta name="keywords" content="react,seo,helmet" />
            </Helmet>

            <h1 className="center title">Contact Me Look at Me!</h1>
            <p>Contact Me Content! Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
            ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            {/* Contact */}
            <h2 className="center green-text text-darken-3">Contact Info</h2>
            <ul className="contact contact-icons footer-links">
                <li className="font-awesome-icon">
                  <a className="contact-me icons" href="tel:+16104067987" title="Phone Number">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </a>
                </li>
                <li className="font-awesome-icon">
                  <a className="contact-me icons" href="mailto:nickoazzarello@gmail.com" title="Email Address">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
            </ul>

            {/* Social Media */}
            <h2 className="center green-text text-darken-3">Social Media</h2>
            <ul className="contact social-media-icons footer-links">
            <li className="font-awesome-icon">
               <a className="facebook icons" href="https://www.facebook.com/nicko.azzarello" target="_blank" rel="noopener noreferrer" title="Facebook">
                 <FontAwesomeIcon icon={faFacebook} />
               </a>
            </li>
            <li className="font-awesome-icon">
              <a className="linkedin icons" href="https://www.linkedin.com/in/nicholas-azzarello-36b405b2/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="font-awesome-icon">
              <a className="instagram icons" href="https://www.instagram.com/nicko_azzarello/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li className="font-awesome-icon">
              <a className="youtube icons" href="https://www.youtube.com/channel/UCdZzMgx3JF9xI6U-ksZMvWg?view_as=subscriber" target="_blank" rel="noopener noreferrer" title="YouTube">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
          </ul>

        </div>
    )
}

export default ContactMe;
