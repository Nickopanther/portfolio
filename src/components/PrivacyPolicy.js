import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="PrivacyPolicy">
      <div className="container content">
        <Helmet>
          <title>Privacy Policy - Nick Azzarello</title>
          <meta name="description" content="Privacy policy page" />
          <meta name="keywords" content="nick azzarello" />
        </Helmet>

      <h1 className="center title">Privacy Policy</h1>

      <h2 className="green-text text-darken-3">Website</h2>
      <p>
         This website has been created with the purpose to showcase work by
         Nick Azzarello. This website does not collect any information, data, or
         cookies.
      </p>

      <h2 className="green-text text-darken-3">Alexa Skills</h2>
      <p>
         All Alexa Skills presented on this site do not collect any information, data, or
         cookies.
      </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy;
