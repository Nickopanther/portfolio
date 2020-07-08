import React from 'react';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const ContactMe = () => {
    return (
        <div className="ContactMe container content">
            <Helmet>
                <title>Contact Me - Nick Azzarello</title>
                <meta name="description" content="testing react helmet" />
                <meta name="keywords" content="react,seo,helmet" />
            </Helmet>

            <h1 className="center title">Contact Me</h1>
            <p>Interested in learning more about me? Get in contact with me,
            via email or phone. You can also follow me through the following social media platforms I'm on.
            </p>

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
            <li className="font-awesome-icon">
              <a className="tiktok icons" href="https://www.tiktok.com/@nicko_azzarello?lang=en" target="_blank" rel="noopener noreferrer" title="TikTok">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>
          </ul>

        </div>
    )
}

export default ContactMe;
