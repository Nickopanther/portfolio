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
import UnofficialEasyButtonSkill from '../images/unofficial-easy-button-skill-italian.png';
import DeerSoundsSkill from '../images/deer-sounds-skill.png';
import BurpSoundsSkill from '../images/burp-sounds-skill-italian.png';
import AirplaneSoundsSkill from '../images/airplane-sounds-skill.png';
import HelicopterSoundsSkill from '../images/helicopter-sounds-skill.png';
import KnockOnDoorSkill from '../images/knock-on-door-skill.png';
import MonkeySoundsSkill from '../images/monkey-sounds-skill.png';
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

const AlexaSkillsItaly = () => {
    return (
        <div className="AlexaSkillsItaly">
   <div className="container content">
      <Helmet>
         <title>Alexa Skills in Italy - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available on Amazon." />
         <meta name="keywords" content="nick azzarello, nickopanther, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills in Italy</h1>
      <p>A list of the many Alexa Skills I have created that are available to use
      on any Alexa device. Click on an image, or name, to learn more about a skill.</p>
      <hr />
      <h1 className="center title">Alexa Skills in Italia</h1>
      <p>Un elenco delle molte di Alexa Skills che ho creato che sono disponibili per l'uso
      su qualsiasi dispositivo Alexa. Fare clic su un'immagine o su un nome per saperne di più su un'skill.</p>
      <div className="center">
        <img src={Italy}
             height="135"
             width="240"
             alt="Italy"
             title="Italy"
         />
      </div>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_21?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-21" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill}
                    height="210"
                    width="210"
                    alt="Preghiere Cattoliche"
                    title="Preghiere Cattoliche"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_21?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-21" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Preghiere Cattoliche</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_16?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-16" target="_blank" rel="noopener noreferrer">
               <img src={RingDoorbellSkill}
                  height="210"
                  width="210"
                  alt="Campanello ad Anello"
                  title="Campanello ad Anello" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_16?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-16" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Campanello ad Anello</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_22?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-22" target="_blank" rel="noopener noreferrer">
               <img src={WakeUpSkill}
                  height="210"
                  width="210"
                  alt="Svegliati ora gioco"
                  title="Svegliati ora gioco" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_22?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-22" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Svegliati ora gioco</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row two">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.it/Nickopanther-Bussa-alla-Porta/dp/B083D7Y2Y3/ref=sr_1_13?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
              <img src={KnockOnDoorSkill}
                  height="210"
                  width="210"
                  alt="Bussa alla Porta"
                  title="Bussa alla Porta" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.it/Nickopanther-Bussa-alla-Porta/dp/B083D7Y2Y3/ref=sr_1_13?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Bussa alla Porta</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Most-Famous-Princess-Bride-Quote/dp/B07KDQDDSK/ref=sr_1_17?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597427108&s=digital-skills&sr=1-17" target="_blank" rel="noopener noreferrer">
               <img src={MostFamousPrincessBrideQuoteSkill}
                    height="210"
                    width="210"
                    alt="Citazione la storia fantastica più famosa"
                    title="Citazione la storia fantastica più famosa" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Most-Famous-Princess-Bride-Quote/dp/B07KDQDDSK/ref=sr_1_17?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597427108&s=digital-skills&sr=1-17" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Citazione la storia fantastica più famosa</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.it/Nickopanther-Suoni-di-Scimmia/dp/B084DJ6ZCD/ref=sr_1_11?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-11" target="_blank" rel="noopener noreferrer">
              <img src={MonkeySoundsSkill}
                   height="210"
                   width="210"
                   alt="Suoni di Scimmia"
                   title="Suoni di Scimmia" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.it/Nickopanther-Suoni-di-Scimmia/dp/B084DJ6ZCD/ref=sr_1_11?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-11" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Suoni di Scimmia</h3>
              </a>
            </div>
         </div>
      </div>
      <div className="row three">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_20?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-20" target="_blank" rel="noopener noreferrer">
               <img src={CleanupSkill}
                    alt="Ripulire il Gioco"
                    title="Ripulire il Gioco"
                    height="210"
                    width="210"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_20?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-20" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Ripulire il Gioco</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.it/Nickopanther-Suoni-dellaeroplano/dp/B087C4LTFW/ref=sr_1_7?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-7" target="_blank" rel="noopener noreferrer">
              <img src={AirplaneSoundsSkill}
                 alt="Suoni dell'aeroplano"
                 title="Suoni dell'aeroplano"
                 height="210"
                 width="210"
              />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.it/Nickopanther-Suoni-dellaeroplano/dp/B087C4LTFW/ref=sr_1_7?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-7" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Suoni dell'aeroplano</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.it/Nickopanther-Suoni-dellelicottero/dp/B08F3WJ9Q9/ref=sr_1_2?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
                <img src={HelicopterSoundsSkill}
                     alt="Suoni dell'elicottero"
                     title="Suoni dell'elicottero"
                     height="210"
                     width="210"
                />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.it/Nickopanther-Suoni-dellelicottero/dp/B08F3WJ9Q9/ref=sr_1_2?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
              <h3 className="center title indigo-text text-darken-4">Suoni dell'elicottero</h3>
            </a>
          </div>
         </div>
      </div>
      <div className="row four">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_19?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-19" target="_blank" rel="noopener noreferrer">
               <img src={LetsGoCampingSkill}
                  height="210"
                  width="210"
                  alt="Andiamo in campeggio"
                  title="Andiamo in campeggio" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_19?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-19" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Andiamo in campeggio</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Suoni-di-elefante/dp/B08413QSY7/ref=sr_1_12?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
               <img src={ElephantSoundsSkill}
                  height="210"
                  width="210"
                  alt="Suoni di elefante"
                  title="Suoni di elefante" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Suoni-di-elefante/dp/B08413QSY7/ref=sr_1_12?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sons d'éléphants</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Suoni-di-Mucca/dp/B084TSCMTY/ref=sr_1_10?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-10" target="_blank" rel="noopener noreferrer">
               <img src={CowSoundsSkill}
                  height="210"
                  width="210"
                  title="Suoni di Mucca"
                  alt="Suoni di Mucca" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Suoni-di-Mucca/dp/B084TSCMTY/ref=sr_1_10?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-10" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Suoni di Mucca</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row five">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_18?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
               <img src={UnofficialEasyButtonSkill}
                  height="210"
                  width="210"
                  alt="Pulsante facile non ufficiale"
                  title="Pulsante facile non ufficiale" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_18?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Pulsante facile non ufficiale</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Suoni-di-Rutto/dp/B089ZVRH6R/ref=sr_1_4?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
               <img src={BurpSoundsSkill}
                  height="210"
                  width="210"
                  alt="Suoni di Rutto"
                  title="Suoni di Rutto" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Suoni-di-Rutto/dp/B089ZVRH6R/ref=sr_1_4?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426467&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Suoni di Rutto</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.it/Nickopanther-Suoni-di-cervo/dp/B08FHT25L5/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426375&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={DeerSoundsSkill}
                  height="210"
                  width="210"
                  title="Suoni di cervo"
                  alt="Suoni di cervo" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.it/Nickopanther-Suoni-di-cervo/dp/B08FHT25L5/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597426375&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Suoni di cervo</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="container">
        <h2 className="center title">Alexa Skills in other Countries</h2>
        <p>If you live outside of Italy and are interested in one of my
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

export default AlexaSkillsItaly;
