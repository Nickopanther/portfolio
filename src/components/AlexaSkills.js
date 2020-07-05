import React from 'react';
import { Helmet } from 'react-helmet';
import CatholicPrayersSkill from '../images/catholic-prayers-skill.png'
import RingDoorbellSkill from '../images/ring-doorbell-skill.png';
import WakeUpSkill from '../images/wake-up-skill.png';
import EaglesChantSkill from '../images/eagles-chant-skill.png';
import MostFamousPrincessBrideQuoteSkill from '../images/most-famous-princess-bride-quote.png';
import TitanicSkill from '../images/titanic-skill.png';
import CleanupSkill from '../images/cleanup-skill.png';
import TheUglyBarnacleSkill from '../images/the-ugly-barnacle-skill.png';
import ChristmasGuitarSkill from '../images/christmas-guitar-skill.png';
import CowSoundsSkill from '../images/cow-sounds-skill.png';
import ElephantSoundsSkill from '../images/elephant-sounds-skill.png';
import RomeoAndJulietQuotesSkill from '../images/romeo-and-juliet-quotes-skill.png';
import HamletQuotesSkill from '../images/hamlet-quotes-skill.png';
import ItalySightsSkill from '../images/italy-sights-skill.png';
import TheTenCommandmentsSkill from '../images/the-ten-commandments-skill.png';
import ContactCTA from './ContactCTA';

const AlexaSkills = () => {
    return (
        <div>
   <div className="container content">
      <Helmet>
         <title>Alexa Skills - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available on Amazon." />
         <meta name="keywords" content="nick azzarello, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills</h1>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1544401431&sr=1-2&keywords=catholic+prayers" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill} alt="Catholic Prayers Skill" title="Catholic Prayers" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1544401431&sr=1-2&keywords=catholic+prayers" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Catholic Prayers</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_2?keywords=ring+doorbell&qid=1576373125&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
               <img src={RingDoorbellSkill}
                  height="210"
                  width="210"
                  alt="Ring Doorbell"
                  title="Ring Doorbell" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_2?keywords=ring+doorbell&qid=1576373125&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Ring Doorbell</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_9?keywords=wake+up&qid=1576374497&s=digital-skills&sr=1-9" target="_blank" rel="noopener noreferrer">
               <img src={WakeUpSkill}
                  height="210"
                  width="210"
                  alt="Wake Up"
                  title="Wake Up" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_9?keywords=wake+up&qid=1576374497&s=digital-skills&sr=1-9" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Wake Up</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row two">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Eagles-Chant/dp/B082X9JVQN/ref=sr_1_1?dchild=1&keywords=eagles+chant&qid=1589411184&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={EaglesChantSkill}
                  height="210"
                  width="210"
                  alt="Eagles Chant"
                  title="Eagles Chant" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Eagles-Chant/dp/B082X9JVQN/ref=sr_1_1?dchild=1&keywords=eagles+chant&qid=1589411184&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Eagles Chant</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Most-Famous-Princess-Bride-Quote/dp/B07KDQDDSK/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1544402917&sr=1-2&keywords=princess+bride" target="_blank" rel="noopener noreferrer">
               <img src={MostFamousPrincessBrideQuoteSkill}
                  alt="Most Famous Princess Bride Quote"
                  title="Most Famous Princess Bride Quote" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Most-Famous-Princess-Bride-Quote/dp/B07KDQDDSK/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1544402917&sr=1-2&keywords=princess+bride" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Most Famous Princess Bride Quote</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Titanic-vs-Titan-Facts/dp/B078PWMV84/ref=sr_1_7?s=digital-skills&ie=UTF8&qid=1544401485&sr=1-7&keywords=titanic" target="_blank" rel="noopener noreferrer">
               <img src={TitanicSkill}
                  alt="Titanic (1912) vs Titan (1898) Facts Skill"
                  title="Titanic (1912) vs Titan (1898) Facts" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Titanic-vs-Titan-Facts/dp/B078PWMV84/ref=sr_1_7?s=digital-skills&ie=UTF8&qid=1544401485&sr=1-7&keywords=titanic" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Titanic (1912) vs Titan (1898) Facts</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row three">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1544403108&sr=1-1&keywords=clean+up+game" target="_blank" rel="noopener noreferrer">
               <img src={CleanupSkill}
                  alt="Cleanup Game"
                  title="Cleanup Game" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1544403108&sr=1-1&keywords=clean+up+game"target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Cleanup Game</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-The-Ugly-Barnacle/dp/B077S3THH7/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1544401661&sr=1-1&keywords=the+ugly+barnacle" target="_blank" rel="noopener noreferrer">
               <img src={TheUglyBarnacleSkill}
                  alt="The Ugly Barnacle"
                  title="The Ugly Barnacle" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-The-Ugly-Barnacle/dp/B077S3THH7/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1544401661&sr=1-1&keywords=the+ugly+barnacle" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">The Ugly Barnacle</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/dp/B087R641LM/ref=sr_1_1?dchild=1&keywords=christmas+guitar&qid=1590267639&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={ChristmasGuitarSkill}
                  height="210"
                  width="210"
                  alt="Christmas Guitar"
                  title="Christmas Guitar" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/dp/B087R641LM/ref=sr_1_1?dchild=1&keywords=christmas+guitar&qid=1590267639&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Christmas Guitar</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row four">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Italy-Sights/dp/B088WDCFWR/ref=sr_1_1?dchild=1&keywords=italy+sights&qid=1590267738&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={ItalySightsSkill}
                  height="210"
                  width="210"
                  title="Italy Sights"
                  alt="Italy Sights" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Italy-Sights/dp/B088WDCFWR/ref=sr_1_1?dchild=1&keywords=italy+sights&qid=1590267738&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Italy Sights</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Hamlet-Quotes/dp/B0846GKT74/ref=sr_1_1?dchild=1&keywords=hamlet+quotes&qid=1590268588&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={HamletQuotesSkill}
                  height="210"
                  width="210"
                  alt="Hamlet Quotes"
                  title="Hamlet Quotes" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Hamlet-Quotes/dp/B0846GKT74/ref=sr_1_1?dchild=1&keywords=hamlet+quotes&qid=1590268588&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Hamlet Quotes</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Romeo-and-Juliet-Quotes/dp/B084LFJCRB/ref=sr_1_1?dchild=1&keywords=romeo+and+juliet&qid=1590268645&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={RomeoAndJulietQuotesSkill}
                  height="210"
                  width="210"
                  title="Romeo and Juliet Quotes"
                  alt="Romeo and Juliet Quotes" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Romeo-and-Juliet-Quotes/dp/B084LFJCRB/ref=sr_1_1?dchild=1&keywords=romeo+and+juliet&qid=1590268645&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Romeo and Juliet Quotes</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row five">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-The-Ten-Commandments/dp/B07H26M4CL/ref=sr_1_3?dchild=1&keywords=ten+commandments&qid=1590268858&s=digital-skills&sr=1-3" target="_blank" rel="noopener noreferrer">
               <img src={TheTenCommandmentsSkill}
                  height="210"
                  width="210"
                  alt="The Ten Commandments"
                  title="The Ten Commandments" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-The-Ten-Commandments/dp/B07H26M4CL/ref=sr_1_3?dchild=1&keywords=ten+commandments&qid=1590268858&s=digital-skills&sr=1-3" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">The Ten Commandments</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Elephant-Sounds/dp/B08413QSY7/ref=sr_1_1?crid=2Q3D3VEO3J2YW&dchild=1&keywords=elephant+sounds&qid=1590269276&s=digital-skills&sprefix=elephant+sounds%2Calexa-skills%2C550&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={ElephantSoundsSkill}
                  height="210"
                  width="210"
                  alt="Elephant Sounds"
                  title="Elephant Sounds" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Elephant-Sounds/dp/B08413QSY7/ref=sr_1_1?crid=2Q3D3VEO3J2YW&dchild=1&keywords=elephant+sounds&qid=1590269276&s=digital-skills&sprefix=elephant+sounds%2Calexa-skills%2C550&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Elephant Sounds</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Cow-Sounds/dp/B084TSCMTY/ref=sr_1_1?dchild=1&keywords=cow+sounds&qid=1590269350&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={CowSoundsSkill}
                  height="210"
                  width="210"
                  title="Cow Sounds"
                  alt="Cow Sounds" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Cow-Sounds/dp/B084TSCMTY/ref=sr_1_1?dchild=1&keywords=cow+sounds&qid=1590269350&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Cow Sounds</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="container center">
         <a href="/videos#alexa-videos" className="white-text text-lighten-3">
           <button className="btn-large green">
             Alexa Videos
             </button>
         </a>
      </div>
   </div>
   <ContactCTA />
</div>
    )
}

export default AlexaSkills;
