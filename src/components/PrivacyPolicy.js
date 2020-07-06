import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="container content">
        <Helmet>
          <title>Privacy Policy - Nick Azzarello</title>
          <meta name="description" content="Privacy policy page" />
          <meta name="keywords" content="nick azzarello" />
        </Helmet>

      <h1 className="center title">Privacy Policy</h1>

      <h2 className="green-text text-darken-3">Videos</h2>
      <p>
         All <Link to ="/videos">videos</Link> presented on this site have been created for classes,
         work, and deomnstrating Alexa Skills.
      </p>

      <h2 className="green-text text-darken-3">Websites</h2>
      <p>
         All <Link to="/websites">websites</Link> have been created for clients from work. None of them collect,
         or ask for, data or personal information.
      </p>
      <h2 className="green-text text-darken-3">Alexa Skills</h2>
      <p>
         All <Link to="/alexa-skills">Alexa Skills</Link> presented on this site has been created for purposes.
         None have been created for clients. None of them collect,
         or ask for, data or personal information.
      </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy;
