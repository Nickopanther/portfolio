import React from 'react';
import { Helmet } from 'react-helmet';
import CatholicPrayersSkill from '../images/catholic-prayers-skill.png'
import RingDoorbellSkill from '../images/ring-doorbell-skill.png';
import WakeUpSkill from '../images/wake-up-skill.png';
import EaglesChantSkill from '../images/eagles-chant-skill.png';
import MostFamousPrincessBrideQuoteSkill from '../images/most-famous-princess-bride-quote-skill.png';
import TitanicSkill from '../images/titanic-skill.png';
import CleanupSkill from '../images/cleanup-game-skill.png';
import TheUglyBarnacleSkill from '../images/the-ugly-barnacle-skill.png';
import ChristmasGuitarSkill from '../images/christmas-guitar-skill.png';
import CowSoundsSkill from '../images/cow-sounds-skill.png';
import ElephantSoundsSkill from '../images/elephant-sounds-skill.png';
import RomeoAndJulietQuotesSkill from '../images/romeo-and-juliet-quotes-skill.png';
import HamletQuotesSkill from '../images/hamlet-quotes-skill.png';
import ItalySightsSkill from '../images/italy-sights-skill.png';
import LetsGoCampingSkill from '../images/lets-go-camping-skill.png';
import UnofficialEasyButtonSkill from '../images/unofficial-easy-button-skill.png';
import DeerSoundsSkill from '../images/deer-sounds-skill.png';
import BurpSoundsSkill from '../images/burp-sounds-skill.png';
import Canada from '../images/canada.png';
import UnitedKingdom from '../images/uk.png';
import Australia from '../images/australia.png';
import Mexico from '../images/mexico.png';
import Spain from '../images/spain.png';
import Brazil from '../images/brazil.png';
import France from '../images/france.png';
import Italy from '../images/italy.png';
import Germany from '../images/germany.png';
import Japan from '../images/japan.png';
import India from '../images/india.png';
import ContactCTA from './ContactCTA';

const AlexaSkills = () => {
    return (
        <div className="AlexaSkills">
   <div className="container content">
      <Helmet>
         <title>Alexa Skills - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available on Amazon." />
         <meta name="keywords" content="nick azzarello, nickopanther, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills</h1>
      <p>A list of the many Alexa Skills I have created that are available to use
      on any Alexa device. Click on an image, or name, to learn more about a skill.</p>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_2?s=digital-skills&ie=UTF8&qid=1544401431&sr=1-2&keywords=catholic+prayers" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill}
                    height="210"
                    width="210"
                    alt="Catholic Prayers"
                    title="Catholic Prayers"
                />
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
                    height="210"
                    width="210"
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
                    height="210"
                    width="210"
                    alt="Titanic (1912) vs Titan (1898) Facts"
                    title="Titanic (1912) vs Titan (1898) Facts"
                />
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
                    title="Cleanup Game"
                    height="210"
                    width="210"
                />
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
                    height="210"
                    width="210"
                    alt="The Ugly Barnacle"
                    title="The Ugly Barnacle"
                />
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
               <a href="https://www.amazon.com/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_4?dchild=1&keywords=camping&qid=1597182784&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
               <img src={LetsGoCampingSkill}
                  height="210"
                  width="210"
                  alt="Let's Go Camping"
                  title="Let's Go Camping" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_4?dchild=1&keywords=camping&qid=1597182784&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Let's Go Camping</h3>
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
      <div className="row six">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_1?dchild=1&keywords=unofficial+easy+button&qid=1597185178&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={UnofficialEasyButtonSkill}
                  height="210"
                  width="210"
                  alt="Unofficial Easy Button"
                  title="Unofficial Easy Button" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_1?dchild=1&keywords=unofficial+easy+button&qid=1597185178&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Unofficial Easy Button</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Burp-Sounds/dp/B089ZVRH6R/ref=sr_1_1?dchild=1&keywords=burp+sounds&qid=1597184362&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={BurpSoundsSkill}
                  height="210"
                  width="210"
                  alt="Burp Sounds"
                  title="Burp Sounds" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Burp-Sounds/dp/B089ZVRH6R/ref=sr_1_1?dchild=1&keywords=burp+sounds&qid=1597184362&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Burp Sounds</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com/Nickopanther-Deer-Sounds/dp/B08FHT25L5/ref=sr_1_1?dchild=1&keywords=deer+sounds&qid=1597185242&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={DeerSoundsSkill}
                  height="210"
                  width="210"
                  title="Deer Sounds"
                  alt="Deer Sounds" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com/Nickopanther-Deer-Sounds/dp/B08FHT25L5/ref=sr_1_1?dchild=1&keywords=deer+sounds&qid=1597185242&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Deer Sounds</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="container">
        <h2 className="center title">Alexa Skills in other Countries</h2>
        <p>If you live outside of the United States and are interested in one of my
        Alexa Skills, click on the respective flag from your country to see what
        is available.</p>

        <div className="row one">
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-canada" rel="noopener noreferrer">
                 <img src={Canada}
                      height="135"
                      width="240"
                      alt="Canada"
                      title="Canada"
                  />
                 </a>
              </div>
           </div>
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-united-kingdom" rel="noopener noreferrer">
                 <img src={UnitedKingdom}
                      height="135"
                      width="240"
                      alt="United Kingdom"
                      title="United Kingdom"
                  />
                 </a>
              </div>
           </div>
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-australia" rel="noopener noreferrer">
                 <img src={Australia}
                      height="135"
                      width="240"
                      alt="Australia"
                      title="Australia"
                  />
                 </a>
              </div>
           </div>
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-mexico" rel="noopener noreferrer">
                 <img src={Mexico}
                      height="135"
                      width="240"
                      alt="Mexico"
                      title="Mexico"
                  />
                 </a>
              </div>
           </div>
        </div>
        <div className="row two">
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-spain" rel="noopener noreferrer">
                 <img src={Spain}
                      height="135"
                      width="240"
                      alt="Spain"
                      title="Spain"
                  />
                 </a>
              </div>
           </div>
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-brazil" rel="noopener noreferrer">
                 <img src={Brazil}
                      height="135"
                      width="240"
                      alt="Brazil"
                      title="Brazil"
                  />
                 </a>
              </div>
           </div>
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-france" rel="noopener noreferrer">
                 <img src={France}
                      height="135"
                      width="240"
                      alt="France"
                      title="France"
                  />
                 </a>
              </div>
           </div>
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-germany" rel="noopener noreferrer">
                 <img src={Germany}
                      height="135"
                      width="240"
                      alt="Germany"
                      title="Germany"
                  />
                 </a>
              </div>
           </div>
        </div>
        <div className="row three">
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-italy" rel="noopener noreferrer">
                 <img src={Italy}
                      height="135"
                      width="240"
                      alt="Italy"
                      title="Italy"
                  />
                 </a>
              </div>
           </div>
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-japan" rel="noopener noreferrer">
                 <img src={Japan}
                      height="135"
                      width="240"
                      alt="Japan"
                      title="Japan"
                  />
                 </a>
              </div>
           </div>
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills-india" rel="noopener noreferrer">
                 <img src={India}
                      height="135"
                      width="240"
                      alt="India"
                      title="India"
                  />
                 </a>
              </div>
           </div>
        </div>
      </div>
   </div>
   <ContactCTA />
</div>
    )
}

export default AlexaSkills;
