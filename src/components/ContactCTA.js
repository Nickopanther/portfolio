import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const ContactCTA = () => {
    return (
        <div className="contact-cta center grey lighten-2">
    

           <h4 className="title indigo-text text-darken-4">Let's Talk</h4>

           <p>Interested in learning more about me? Get in contact with me, via email or phone.
               <br />
               You can also follow me through the following social media platforms I'm on.
           </p>

             <ScrollToTop>
                <Link to="/contact-me" className="white-text text-lighten-3">
                    <button className="btn-large green">
                      Contact Me
                    </button>
                </Link>
            </ScrollToTop>

        </div>
    )
}

export default ContactCTA;
