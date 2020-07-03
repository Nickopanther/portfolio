import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import ContactCTA from './ContactCTA';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faDesktop, faMicrophone } from "@fortawesome/free-solid-svg-icons";

class Home extends Component {
    render() {
        return (
          <div className="content home">
   <Helmet>
      <title>Nick Azzarello</title>
      <meta name="description" content="testing react helmet" />
      <meta name="keywords" content="react,seo,helmet" />
   </Helmet>
   <div className="hero">
      <div className="hero-content container center">
         <h1>Nick Azzarello</h1>
         <p>Explore my work of videos and Alexa Skills.</p>
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
            <iframe width="617" height="347" src="https://www.youtube.com/embed/46Hf43IOuGk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" title="Nick Azzarello's Website"></iframe>
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
            <ul className="contact social-media-icons footer-links">
               <li className="font-awesome-icon">
                  <a className="icons indigo-text text-darken-4" href="/videos" rel="noopener noreferrer" title="Videos">
                     <FontAwesomeIcon icon={faFilm} />
                     <h3>Videos</h3>
                  </a>
               </li>
               <li className="font-awesome-icon">
                  <a className="icons indigo-text text-darken-4" href="/websites" rel="noopener noreferrer" title="Websites">
                     <FontAwesomeIcon icon={faDesktop} />
                     <h3>Websites</h3>
                  </a>
               </li>
               <li className="font-awesome-icon">
                  <a className="icons indigo-text text-darken-4" href="/alexa-skills" target="_blank" rel="noopener noreferrer" title="Instagram">
                     <FontAwesomeIcon icon={faMicrophone} />
                     <h3>Alexa Skills</h3>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   </div>
   <ContactCTA />
</div>

        );
    }
}

export default Home;
