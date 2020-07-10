import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
        return (
            <div className="NotFound">
            <Helmet>
               <title>Not Found - Nick Azzarello</title>
               <meta name="description" content="Video content created by Nick Azzarello. Videos have been created for courses at Kutztown University, clients for a small digital marketing agency, and demonstration videos for Alexa Skills he has made."/>
               <meta name="keywords" content="nick azzarello, videos, video production"/>
            </Helmet>
              <div className="container content center">
                <h1 className="title">404 Not Found</h1>
                <Link to="/">
                    <button className="btn-large green">
                        Home
                    </button>
                </Link>
              </div>
            </div>
        );
}
export default NotFoundPage;
