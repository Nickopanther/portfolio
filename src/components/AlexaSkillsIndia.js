import React from 'react';
import { Helmet } from 'react-helmet';
import PigNoisesSkill from '../images/pig-noises-skill.png'
import RingDoorbellSkill from '../images/ring-doorbell-skill.png';
import TrainSoundsSkill from '../images/train-sounds-skill.png';
import EaglesChantSkill from '../images/eagles-chant-skill.png';
import HowlingDogsSkill from '../images/howling-dogs-skill.png';
import CleanupSkill from '../images/cleanup-game-skill.png';
import TheUglyBarnacleSkill from '../images/the-ugly-barnacle-skill.png';
import ChristmasGuitarSkill from '../images/christmas-guitar-skill.png';
import CowSoundsSkill from '../images/cow-sounds-skill.png';
import ElephantSoundsSkill from '../images/elephant-sounds-skill.png';
import SquirrelSoundsSkill from '../images/squirrel-sounds-skill.png';
import RomeoAndJulietQuotesSkill from '../images/romeo-and-juliet-quotes-skill.png';
import HamletQuotesSkill from '../images/hamlet-quotes-skill.png';
import CatSoundsSkill from '../images/cat-sounds-skill.png';
import UnofficialEasyButtonSkill from '../images/unofficial-easy-button-skill-japanese.png';
import BurpSoundsSkill from '../images/burp-sounds-skill-japanese.png';
import AirplaneSoundsSkill from '../images/airplane-sounds-skill.png';
import HelicopterSoundsSkill from '../images/helicopter-sounds-skill.png';
import KnockOnDoorSkill from '../images/knock-on-door-skill.png';
import BeepHornSkill from '../images/beep-horn-skill.png';
import UnitedStates from '../images/us.png';
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

const AlexaSkillsIndia = () => {
    return (
        <div className="AlexaSkillsIndia">
   <div className="container content">
      <Helmet>
         <title>Alexa Skills in India - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available in India on Amazon." />
         <meta name="keywords" content="nick azzarello, nickopanther, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills in India</h1>
      <p>A list of the many Alexa Skills I have created that are available to use
      on any Alexa device. Click on an image, or name, to learn more about a skill.</p>
      <hr />
      <h1 className="center title">एलेक्सा स्किल्स इन इंडिया</h1>
      <p>मेरे द्वारा बनाई गई कई एलेक्सा कौशल की एक सूची जो उपयोग करने के लिए उपलब्ध है
      किसी भी एलेक्सा डिवाइस पर। एक कौशल के बारे में अधिक जानने के लिए, एक छवि या नाम पर क्लिक करें।</p>
      <div className="center">
        <img src={India}
             height="135"
             width="240"
             alt="Brazil"
             title="Brazil"
        />
      </div>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.in/Nickopanther-Howling-Dogs/dp/B082ZSTLCQ/ref=sr_1_26?dchild=1&keywords=nickopanther&qid=1597437738&s=digital-skills&sr=1-26" target="_blank" rel="noopener noreferrer">
            <img src={HowlingDogsSkill}
               height="210"
               width="210"
               alt="Howling Dogs / आवारा क"
               title="Howling Dogs / आवारा क" />
            </a>
         </div>
         <div className="alexa-content">
            <a href="https://www.amazon.in/Nickopanther-Howling-Dogs/dp/B082ZSTLCQ/ref=sr_1_26?dchild=1&keywords=nickopanther&qid=1597437738&s=digital-skills&sr=1-26" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Howling Dogs / आवारा क</h3>
            </a>
         </div>
         </div>
         <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.in/Nickopanther-Burp-Sounds/dp/B089ZVRH6R/ref=sr_1_4?dchild=1&keywords=nickopanther&language=en_IN&qid=1597437144&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
            <img src={BurpSoundsSkill}
               height="210"
               width="210"
               alt="Burp Sounds / Burp लगता है"
               title="Burp Sounds / Burp लगता ह" />
            </a>
         </div>
         <div className="alexa-content">
            <a href="https://www.amazon.in/Nickopanther-Burp-Sounds/dp/B089ZVRH6R/ref=sr_1_4?dchild=1&keywords=nickopanther&language=en_IN&qid=1597437144&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Burp Sounds / Burp लगता ह</h3>
            </a>
         </div>
         </div>
         <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.in/%E0%A4%96%E0%A5%87%E0%A4%B2-%E0%A4%95%E0%A5%8B-%E0%A4%B8%E0%A4%BE%E0%A4%AB-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82/dp/B07BV3FDJD/ref=sr_1_36?dchild=1&keywords=nickopanther&qid=1597437928&s=digital-skills&sr=1-36" target="_blank" rel="noopener noreferrer">
            <img src={CleanupSkill}
                 alt="Cleanup Game / खेल को साफ करें"
                 title="Cleanup Game / खेल को साफ करे"
                 height="210"
                 width="210"
             />
            </a>
         </div>
         <div className="alexa-content">
            <a href="https://www.amazon.in/%E0%A4%96%E0%A5%87%E0%A4%B2-%E0%A4%95%E0%A5%8B-%E0%A4%B8%E0%A4%BE%E0%A4%AB-%E0%A4%95%E0%A4%B0%E0%A5%87%E0%A4%82/dp/B07BV3FDJD/ref=sr_1_36?dchild=1&keywords=nickopanther&qid=1597437928&s=digital-skills&sr=1-36" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Cleanup Game / खेल को साफ करे</h3>
            </a>
         </div>
         </div>
      </div>
      <div className="row two">
      <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.in/%E0%A4%B9%E0%A4%BE%E0%A4%A5%E0%A5%80-%E0%A4%95%E0%A4%BE-%E0%A4%B6%E0%A5%8B%E0%A4%B0/dp/B08413QSY7/ref=sr_1_18?dchild=1&keywords=nickopanther&qid=1597437738&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
            <img src={ElephantSoundsSkill}
               height="210"
               width="210"
               alt="Elephant Sounds / हाथी का शोर"
               title="Elephant Sounds / हाथी का शोर" />
            </a>
         </div>
         <div className="alexa-content">
            <a href="https://www.amazon.in/%E0%A4%B9%E0%A4%BE%E0%A4%A5%E0%A5%80-%E0%A4%95%E0%A4%BE-%E0%A4%B6%E0%A5%8B%E0%A4%B0/dp/B08413QSY7/ref=sr_1_18?dchild=1&keywords=nickopanther&qid=1597437738&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Elephant Sounds / हाथी का शोर</h3>
            </a>
         </div>
      </div>
      <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.in/Nickopanther-Cow-Sounds/dp/B084TSCMTY/ref=sr_1_14?dchild=1&keywords=nickopanther&qid=1597437144&s=digital-skills&sr=1-14" target="_blank" rel="noopener noreferrer">
            <img src={CowSoundsSkill}
               height="210"
               width="210"
               title="Cow Sounds / गाय लगता है"
               alt="Cow Sounds / गाय लगता है" />
            </a>
         </div>
         <div className="alexa-content">
            <a href="https://www.amazon.in/Nickopanther-Cow-Sounds/dp/B084TSCMTY/ref=sr_1_14?dchild=1&keywords=nickopanther&qid=1597437144&s=digital-skills&sr=1-14" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Cow Sounds / गाय लगता ह</h3>
            </a>
         </div>
      </div>
         <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.in/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_33?dchild=1&keywords=nickopanther&qid=1597437928&s=digital-skills&sr=1-33" target="_blank" rel="noopener noreferrer">
            <img src={UnofficialEasyButtonSkill}
               height="210"
               width="210"
               alt="Unofficial Easy Button / अनौपचारिक आसान बटन"
               title="Unofficial Easy Button / अनौपचारिक आसान बटन" />
            </a>
         </div>
         <div className="alexa-content">
            <a href="https://www.amazon.in/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_33?dchild=1&keywords=nickopanther&qid=1597437928&s=digital-skills&sr=1-33" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Unofficial Easy Button / अनौपचारिक आसान बटन</h3>
            </a>
         </div>
         </div>
      </div>
      <div className="row three">
         <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.in/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_28?dchild=1&keywords=nickopanther&qid=1597437632&s=digital-skills&sr=1-28" target="_blank" rel="noopener noreferrer">
            <img src={RingDoorbellSkill}
               height="210"
               width="210"
               alt="Ring Doorbell"
               title="Ring Doorbell" />
            </a>
         </div>
         <div className="alexa-content">
            <a href="" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Ring Doorbell</h3>
            </a>
         </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.in/Nickopanther-Airplane-Sounds/dp/B087C4LTFW/ref=sr_1_10?dchild=1&keywords=nickopanther&qid=1597438174&s=digital-skills&sr=1-10" target="_blank" rel="noopener noreferrer">
              <img src={AirplaneSoundsSkill}
                 alt="Airplane Sounds"
                 title="Airplane Sounds"
                 height="210"
                 width="210"
              />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.in/Nickopanther-Airplane-Sounds/dp/B087C4LTFW/ref=sr_1_10?dchild=1&keywords=nickopanther&qid=1597438174&s=digital-skills&sr=1-10" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Airplane Sounds</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.in/Nickopanther-Romeo-and-Juliet-Quotes/dp/B084LFJCRB/ref=sr_1_15?dchild=1&keywords=nickopanther&qid=1597438174&s=digital-skills&sr=1-15" target="_blank" rel="noopener noreferrer">
                <img src={RomeoAndJulietQuotesSkill}
                     alt="Romeo and Juliet Quotes"
                     title="Romeo and Juliet Quotes"
                     height="210"
                     width="210"
                />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.in/Nickopanther-Romeo-and-Juliet-Quotes/dp/B084LFJCRB/ref=sr_1_15?dchild=1&keywords=nickopanther&qid=1597438174&s=digital-skills&sr=1-15" target="_blank" rel="noopener noreferrer">
              <h3 className="center title indigo-text text-darken-4">Romeo and Juliet Quotes</h3>
            </a>
          </div>
         </div>
      </div>

      <div className="container">
        <h2 className="center title">Alexa Skills in other Countries</h2>
        <p>If you live outside of India and are interested in one of my
        Alexa Skills, click on the respective flag from your country to see what
        is available.</p>

        <div className="row one">
           <div className="alexa col s12 m6 l3">
              <div className="flag-image">
                 <a href="/alexa-skills" rel="noopener noreferrer">
                 <img src={UnitedStates}
                      height="135"
                      width="240"
                      alt="United States"
                      title="United States"
                  />
                 </a>
              </div>
           </div>
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
        </div>
        <div className="row two">
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
        </div>
        <div className="row three">
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
        </div>
      </div>
   </div>
   <ContactCTA />
</div>
    )
}

export default AlexaSkillsIndia;
