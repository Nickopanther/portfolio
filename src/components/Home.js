import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ContactCTA from './ContactCTA';
import Clapboard from '../images/clapboard.png';
import Computer from '../images/computer.png';
import Echo from '../images/echo.png';

class Home extends Component {
    render() {
        return (
          <div className="Home">
   <Helmet>
      <title>Nick Azzarello</title>
      <meta name="description" content="Nick Azzarello's portfolio that showcases his work with videos, websites, and Alexa Skills." />
      <meta name="keywords" content="nick azzarello, nickopanther" />
  </Helmet>

   {/* Hero Image */}
   <div className="hero">
      <div className="hero-content container center">
         <h1>Nick Azzarello</h1>
         <p>Explore my work of videos, websites and Alexa Skills.</p>
         <ScrollToTop>
            <Link to="/contact-me" className="white-text text-lighten-3">
            <button className="btn-large green">
            Contact Me
            </button>
            </Link>
         </ScrollToTop>
      </div>
   </div>

   <div className="container">
      <div className="center video">
         <div className="video-clip">
            <iframe width="617" height="343" src="https://www.youtube.com/embed/pETA3tjP6Os" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Nick Azzarello's Website"></iframe>
         </div>
         <div className="video-content">
            <h2 className="green-text text-darken-3">Get to Know Me in Only 2 (in a half) Minutes!</h2>
            <p>Would you like to skip all the reading and going through
               every single page? <br />Watch this video to learn more all
               about me, my projects, and, of course, my website.
            </p>
            <ScrollToTop>
               <Link to="/about-me" className="white-text text-lighten-3">
               <button className="btn-large green">
               About Me
               </button>
               </Link>
            </ScrollToTop>
         </div>
      </div>


      {/* Skills/Services */}
      <div className="row skills">
        <div className="col s12 m6 l4">
          <Link to="/alexa-skills" className="indigo-text text-darken-4" rel="noopener noreferrer">
          <img src={Echo}
               height="150"
               alt="Echo"/>
             <h3 className="center">Alexa Skills</h3>
          </Link>
        </div>
        <div className="col s12 m6 l4">
            <Link to="/videos" className="indigo-text text-darken-4" rel="noopener noreferrer">
               <img src={Clapboard}
                    height="150"
                    alt="Clapbaord"/>
               <h3 className="center">Videos</h3>
            </Link>
        </div>
        <div className="col s12 m6 l4">
            <Link to="/websites" className="indigo-text text-darken-4" rel="noopener noreferrer">
            <img src={Computer}
                 height="150"
                 alt="Computer"/>
               <h3 className="center">Websites</h3>
            </Link>
        </div>
      </div>

   </div>
   <ContactCTA />
</div>

        );
    }
}

export default Home;
