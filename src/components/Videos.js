import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import ContactCTA from './ContactCTA';

const Videos = () => {
  return (
    <div className="Videos">
   <div className="container content">
      <Helmet>
         <title>Videos - Nick Azzarello</title>
         <meta name="description" content="Video content created by Nick Azzarello. Videos have been created for courses at Kutztown University, clients for a small digital marketing agency, and demonstration videos for Alexa Skills he has made."/>
         <meta name="keywords" content="nick azzarello, videos, video production"/>
      </Helmet>

      <h1 className="center title">Videos</h1>
      <p>Video production has always been a passion of mine. I enjoy every aspect
      of it. From pre-production to post production, it is very rewarding to take
      an idea and watch it turn into something special for everyone to see. I
      majored with a bachelor's in Electronic Media, at Kutztown University, and
      gained more knowledge and skills with my craft. I have had the pleasure to
      work as PA for a video production company, work as a camera operator for
      my local sport teams, and create my own video production work. Below are
      videos of what I have done at Kutztown University, my jobs, and
      demonstration videos for my <Link className="green-text text-darken-3" to="/alexa-skills">Alexa Skills</Link>.</p>

      <h2 className="center green-text text-darken-3">Kutztown University</h2>
      <p>At Kutztown University I have made numerous video projects with the knowledge based off what I learned from my classes. I had the chance to write, shoot, and edit many projects and helped out on other projects.</p>
      <div className="row one">
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/57pngVgjQhE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen" title="Demo Reel"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Demo Reel</h3>
               <ul>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/GD4s7KgjuOc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowFullScreen" title="Internship at TC Motion"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Internship at TC Motion</h3>
               <ul>
                  <li><strong>Production Assistant</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/auZyWrzzNgs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="For Dummies"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">For Dummies</h3>
               <ul>
                  <li><strong>Screenwriter</strong></li>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
      </div>
      <div className="row two">
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/2-brSKzN7jg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="The Monkey's Paw (Reading)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">The Monkey's Paw (Reading)</h3>
               <ul>
                  <li><strong>Audio Engineer</strong></li>
               </ul>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/yn2829sXOAc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Inside (Short Film)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Inside <br /> (Short Film)</h3>
               <ul>
                  <li><strong>Boom Mic Operator</strong></li>
               </ul>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/kWert-LdWs0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="KUTV's Camera One (Segues)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">KUTV's Camera One (Segues)</h3>
               <ul>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
      </div>
      <div className="row three">
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/wdGWJGG_vtg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Berks Lanes (Package)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Berks Lanes <br /> (Package)</h3>
               <ul>
                  <li><strong>Screenwriter</strong></li>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/i0lpGMEPqNk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Young Ones (Package)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Young Ones <br /> (Package)</h3>
               <ul>
                  <li><strong>Screenwriter</strong></li>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/-cRZVE2psU0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="No One Came to my Party"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">No One Came to my Party</h3>
               <ul>
                  <li><strong>Screenwriter</strong></li>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
      </div>

      <hr />

      <h2 className="center green-text text-darken-3">
      Clients for a Digital Marketing Agency
      </h2>
      <p>Here are videos I've made for clients at <a className="green-text text-darken-3" href="https://dabrianmarketing.com/" target="_blank" rel="noopener noreferrer">
      DaBrian Marketing Group, LLC</a>. I was in charge of shooting, audio, and
      editing the entire project. Each video was a one man shoot.</p>
      <div className="row four">
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/xW5AW7klBQc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="COCA (Package #1)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">COCA <br /> (Package #1)</h3>
               <ul>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/9mKueWqrO8M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="COCA (Package #2)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">COCA <br /> (Package #2)</h3>
               <ul>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/ch52ecw8Jng" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Cherry Orthodontics (Package)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Cherry Orthodontics (Package)</h3>
               <ul>
                  <li><strong>Videographer</strong></li>
                  <li><strong>Editor</strong></li>
               </ul>
            </div>
         </div>
      </div>

      <hr />

      <h2 id="alexa-videos" className="center green-text text-darken-3">Alexa Skills</h2>
      <p>Video deomonstrations of Alexa Skills I've made. Each is available on any
         Alexa device. To find a skill you are interested in, from the videos, <Link className="green-text text-darken-3" to="/alexa-skills">click here</Link>.</p>

      <div className="row five">
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/Wi6xae3Cu5M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Catholic Prayers (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Catholic Prayers (Demo)</h3>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="360" height="202" src="https://www.youtube.com/embed/RN5c_CkofH0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Ten Commandments (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Ten Commandments (Demo)</h3>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/AsQHMdRGQRw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Ring Doorbell (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Ring Doorbell (Demo)</h3>
            </div>
         </div>
      </div>
      <div className="row six">
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/AzW_lx8QFtc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Most Famous Princess Bride Quote (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Most Famous Princess Bride Quote (Demo)</h3>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/Zl_PtflzARQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Elephant Sounds (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Elephant Sounds (Demo)</h3>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/L-maNYN0lCg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Cleanup Game (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Cleanup Game (Demo)</h3>
            </div>
         </div>
      </div>
      <div className="row seven">
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/orDd-SKc7P0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="The Ugly Barnacle (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">The Ugly Barnacle (Demo)</h3>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/220W1brlag0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Wake Up (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Wake Up (Demo)</h3>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/w-hpXLp6ryI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Romeo and Juliet Quotes (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Romeo and Juliet Quotes (Demo)</h3>
            </div>
         </div>
      </div>
      <div className="row eight">
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/JQcrzUhAZxw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Hamlet Quotes (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Hamlet Quotes (Demo)</h3>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/4IEgXa6fuEk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Eagles Chant (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Eagles Chant (Demo)</h3>
            </div>
         </div>
         <div className="video col s12 m12 l4">
            <div className="video-clip center">
               <iframe width="343" height="193" src="https://www.youtube.com/embed/5utN71xB4f0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Italy Sights (Demo)"></iframe>
            </div>
            <div className="video-content center">
               <h3 className="center title indigo-text text-darken-4">Italy Sights (Demo)</h3>
            </div>
         </div>
      </div>

      <hr />

      <div>
        <h2 className="center green-text text-darken-3">Watch More Videos</h2>
        <p className="center">If you enjoyed some of the videos you've seen here,
        you can see more, and follow me, on <strong>YouTube</strong> and
        <strong>TikTok</strong>.</p>
        <ul className="contact social-media-icons footer-links">
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

   </div>

   <ContactCTA />
</div>
)
}

export default Videos;
