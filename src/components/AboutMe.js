import React from 'react';
import { Helmet } from 'react-helmet';
import PhilliesCameraOperator from '../images/phillies-camera-opereator.jpg';
import DaBrian from '../images/dabrian-about-me.png';
import CatholicPrayersSkill from '../images/catholic-prayers-skill.png';
import ContactCTA from './ContactCTA';

const AboutMe = () => {
    return (
        <div className="AboutMe">
   <div className="container content">
      <Helmet>
         <title>About Me - Nick Azzarello</title>
         <meta name="description" content="Learn how I got where I am today. From my journey at Kutztown University to the job I am at right now. Learn how I gained the skills in video production, web development, and Alexa Skills." />
         <meta name="keywords" content="nick azzarello, nickopanther" />
      </Helmet>
      <h1 className="center title">About Me</h1>

      {/* Desktop */}
      <div className="about-me-desktop">
         {/* Kutztown University */}
         <div className="row">
            <div className="col l5">
               <h2 className="green-text text-darken-3">Journey at Kutztown University</h2>
               <p>
                  Graduated with a Bachelor’s Degree in Electronic
                  Media from Kutztown University and later got my Certification in Web
                  Development at Reading Area Community College. I have done many porjects,
                  for work and fun, with videos, websites, and Alexa Skills.
               </p>
               <p>
                  At Kutztown University, my major revolved around all aspects of video production.
                  While I was learning the fundamentals, I was able to create my own content for several
                  assignments.
               </p>
            </div>
            <div className="video-clip col l5 offset-l2">
               <iframe width="525" height="300" src="https://www.youtube.com/embed/57pngVgjQhE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Berks Lanes (Package)"></iframe>
            </div>
         </div>

         <hr />

         {/* Internship */}
         <div className="row">
            <div className="video-clip col l5">
               <iframe width="525" height="300" src="https://www.youtube.com/embed/GD4s7KgjuOc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen" title="Internship at TC Motion (Lancaster, PA)"></iframe>
            </div>
            <div className="col l5 offset-l2">
               <h2 className="green-text text-darken-3">Internship at TC Motion</h2>
               <p>
                  My career in video production kicked off with my summer internship at TC Motion,
                  a video production company in Lancaster, PA. I served as production assistant
                  on their many projects in-house and on location. Watch the video where I give a
                  general overview of my experience with the company.
               </p>
            </div>
         </div>

         <hr />

         {/* Camera Operator Jobs */}
         <div className="row">
            <div className="col l5">
               <h2 className="green-text text-darken-3">Video Camera Operator</h2>
               <p>
                  After my internship, I started to work as a camera operator for two local sport
                  teams in Reading, PA. I would shoot the home games during each season.
               </p>
            </div>
            <div className="image col l5 offset-l2">
               <img src={PhilliesCameraOperator}
                  height="320"
                  width="320"
                  alt="Camera Operator at the Fightin' Phils"
                  title="Camera Operator at the Fightin' Phils"
                  />
            </div>
         </div>

         <hr />

         {/* DaBrian Marketing Groups */}
         <div className="row">
         <div className="image col l5">
            <a href="https://dabrianmarketing.com" target="_blank" rel="noopener noreferrer">
            <img src={DaBrian}
               height="350"
               width="600"
               alt="DaBrian Marketing Group, LLC"
               title="DaBrian Marketing Group, LLC" />
            </a>
         </div>
            <div className="col l5 offset-l2">
               <h2 className="green-text text-darken-3">DaBrian Marketing Group</h2>
               <p>
                  Currently, I work for a digital marketing agency, DaBrian Marketing Group,
                  in Reading. In my role, I develop and design websites on WordPress and update
                  the plugins and themes frequently. I have also shot and edited videos for some
                  of their clients.
               </p>
            </div>
         </div>

         <hr />

         {/* Alexa Skills */}
         <div className="row">
            <div className="col l5">
               <h2 className="green-text text-darken-3">Building Alexa Skills</h2>
               <p>
                  During free time, I enjoy creating and learning Alexa Skills. I have over 20 that
                  are available on the Amazon marketplace.
               </p>
            </div>
            <div className="image col l5 offset-l2">
               <a href="https://www.amazon.com/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1544401431&sr=1-2&keywords=catholic+prayers" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill}
                  alt="Catholic Prayers Skill"
                  title="Catholic Prayers" />
               </a>
            </div>
         </div>
      </div>

      {/* Mobile */}
      <div className="about-me-mobile">
         <div className="row">
            {/* Kutztown University */}
            <div className="col s12">
               <h2 className="center green-text text-darken-3">Journey at Kutztown University</h2>
               <p>
                  Graduated with a Bachelor’s Degree in Electronic
                  Media from Kutztown University and later got my Certification in Web
                  Development at Reading Area Community College. I have done many porjects,
                  for work and fun, with videos, websites, and Alexa Skills.
               </p>
               <p>
                  At Kutztown University, my major revolved around all aspects of video production.
                  While I was learning the fundamentals, I was able to create my own content for several
                  assignments.
               </p>
            </div>
            <div className="video-image col s12 ">
               <iframe width="260" height="140" src="https://www.youtube.com/embed/57pngVgjQhE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Berks Lanes (Package)"></iframe>
            </div>
         </div>

         <hr />

         {/* Internship */}
         <div className="row">
            <div className="col s12">
               <h2 className="center green-text text-darken-3">Internship at TC Motion</h2>
               <p>
                  My career in video production kicked off with my summer internship at TC Motion,
                  a video production company in Lancaster, PA. I served as production assistant
                  on their many projects in-house and on location. Watch the video where I give a
                  general overview of my experience with the company.
               </p>
            </div>
            <div className="video-image col s12">
               <iframe width="260" height="140" src="https://www.youtube.com/embed/GD4s7KgjuOc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen" title="Internship at TC Motion (Lancaster, PA)"></iframe>
            </div>
         </div>

         <hr />

         {/* Camera Operator Jobs */}
         <div className="row">
            <div className="col s12">
               <h2 className="center green-text text-darken-3">Video Camera Operator</h2>
               <p>
                  After my internship, I started to work as a camera operator for two local sport
                  teams in Reading, PA. I would shoot the home games during each season.
               </p>
            </div>
            <div className="video-image col s12 phillies-camera-operator">
               <img src={PhilliesCameraOperator}
                  alt="Camera Operator at the Fightin' Phils"
                  title="Camera Operator at the Fightin' Phils"
                  />
            </div>
         </div>

         <hr />

         {/* DaBrian Marketing Groups */}
         <div className="row">
            <div className="col s12">
               <h2 className="center green-text text-darken-3">DaBrian Marketing Group</h2>
               <p>
                  Currently, I work for a digital marketing agency, DaBrian Marketing Group,
                  in Reading. In my role, I develop and design websites on WordPress and update
                  the plugins and themes frequently. I have also shot and edited videos for some
                  of their clients.
               </p>
            </div>
            <div className="video-image col s12 dabrian-laptop">
            <a href="https://www.amazon.com/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1544401431&sr=1-2&keywords=catholic+prayers" target="_blank" rel="noopener noreferrer">
            <img src={DaBrian}
               alt="DaBrian Marketing Group, LLC"
               title="DaBrian Marketing Group, LLC" />
            </a>
            </div>
         </div>

         <hr />

         {/* Alexa Skills */}
         <div className="row">
            <div className="col s12">
               <h2 className="center green-text text-darken-3">Building Alexa Skills</h2>
               <p>
                  During free time, I enjoy creating and learning Alexa Skills. I have over 20 that
                  are available on the Amazon marketplace.
               </p>
            </div>
            <div className="video-image col s12">
               <a href="https://www.amazon.com/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1544401431&sr=1-2&keywords=catholic+prayers" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill}
                  alt="Catholic Prayers Skill"
                  title="Catholic Prayers" />
               </a>
            </div>
         </div>
      </div>
   </div>
   <ContactCTA />
</div>
    )
}

export default AboutMe;
