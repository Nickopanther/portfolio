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
import UnofficialEasyButtonSkill from '../images/unofficial-easy-button-skill-spanish.png';
import DeerSoundsSkill from '../images/deer-sounds-skill.png';
import BurpSoundsSkill from '../images/burp-sounds-skill-spanish.png';
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

const AlexaSkillsMexico = () => {
    return (
        <div className="AlexaSkillsMexico">
   <div className="container content">
      <Helmet>
         <title>Alexa Skills in Mexico - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available on Amazon." />
         <meta name="keywords" content="nick azzarello, nickopanther, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills in Mexico</h1>
      <p>A list of the many Alexa Skills I have created that are available to use
      on any Alexa device. Click on an image, or name, to learn more about a skill.</p>
      <hr />
      <h1 className="center title">Alexa Skills en México</h1>
      <p>Una lista de las muchas de Alexa Skills que he creado que están disponibles para usar
      en cualquier dispositivo Alexa. Haga clic en una imagen o nombre para obtener más información
      sobre una skill.</p>
      <div className="center">
        <img src={Mexico}
             height="135"
             width="240"
             alt="Mexico"
             title="Mexico"
         />
      </div>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_21?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-21" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill}
                    height="210"
                    width="210"
                    alt="Oraciones Católicas"
                    title="Oraciones Católicas"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_21?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-21" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Oraciones Católicas</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_16?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-16" target="_blank" rel="noopener noreferrer">
               <img src={RingDoorbellSkill}
                  height="210"
                  width="210"
                  alt="Toca el Timbre"
                  title="Toca el Timbre" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_16?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-16" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Toca el Timbre</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Despierta/dp/B077PML4M8/ref=sr_1_22?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-22" target="_blank" rel="noopener noreferrer">
               <img src={WakeUpSkill}
                  height="210"
                  width="210"
                  alt="Despierta"
                  title="Despierta" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Despierta/dp/B077PML4M8/ref=sr_1_22?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-22" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Despierta</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row two">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.com.mx/Nickopanther-Llama-a-la-Puerta/dp/B083D7Y2Y3/ref=sr_1_13?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
              <img src={KnockOnDoorSkill}
                  height="210"
                  width="210"
                  alt="Llama a la Puerta"
                  title="Llama a la Puerta" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.com.mx/Nickopanther-Llama-a-la-Puerta/dp/B083D7Y2Y3/ref=sr_1_13?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Llama a la Puerta</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Most-Famous-Princess-Bride-Quote/dp/B07KDQDDSK/ref=sr_1_17?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597421874&s=digital-skills&sr=1-17" target="_blank" rel="noopener noreferrer">
               <img src={MostFamousPrincessBrideQuoteSkill}
                    height="210"
                    width="210"
                    alt="Cita de la princesa prometida más famosa"
                    title="Cita de la princesa prometida más famosa" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Most-Famous-Princess-Bride-Quote/dp/B07KDQDDSK/ref=sr_1_17?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597421874&s=digital-skills&sr=1-17" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Cita de la princesa prometida más famosa</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-Mono/dp/B084DJ6ZCD/ref=sr_1_12?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
              <img src={MonkeySoundsSkill}
                   height="210"
                   width="210"
                   alt="Sonidos de Mono"
                   title="Sonidos de Mono" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-Mono/dp/B084DJ6ZCD/ref=sr_1_12?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Sonidos de Mono</h3>
              </a>
            </div>
         </div>
      </div>
      <div className="row three">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_20?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-20" target="_blank" rel="noopener noreferrer">
               <img src={CleanupSkill}
                    alt="Juego de Limpieza"
                    title="Juego de Limpieza"
                    height="210"
                    width="210"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_20?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-20" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Juego de Limpieza</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-aviones/dp/B087C4LTFW/ref=sr_1_8?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-8" target="_blank" rel="noopener noreferrer">
              <img src={AirplaneSoundsSkill}
                 alt="Sonidos de aviones"
                 title="Sonidos de aviones"
                 height="210"
                 width="210"
              />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-aviones/dp/B087C4LTFW/ref=sr_1_8?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-8" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Sonidos de aviones</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-Helic%C3%B3ptero/dp/B08F3WJ9Q9/ref=sr_1_4?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
                <img src={HelicopterSoundsSkill}
                     alt="Sonidos de Helicóptero"
                     title="Sonidos de Helicóptero"
                     height="210"
                     width="210"
                />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-Helic%C3%B3ptero/dp/B08F3WJ9Q9/ref=sr_1_4?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
              <h3 className="center title indigo-text text-darken-4">Sonidos de Helicóptero</h3>
            </a>
          </div>
         </div>
      </div>
      <div className="row four">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_19?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-19" target="_blank" rel="noopener noreferrer">
               <img src={LetsGoCampingSkill}
                  height="210"
                  width="210"
                  alt="Vamos a acampar"
                  title="Vamos a acampar" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_19?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-19" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Vamos a acampar</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-elefante/dp/B08413QSY7/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-3" target="_blank" rel="noopener noreferrer">
               <img src={ElephantSoundsSkill}
                  height="210"
                  width="210"
                  alt="Sonidos de elefante"
                  title="Sonidos de elefante" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-elefante/dp/B08413QSY7/ref=sr_1_3?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-3" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sonidos de elefante</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-Vaca/dp/B084TSCMTY/ref=sr_1_11?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-11" target="_blank" rel="noopener noreferrer">
               <img src={CowSoundsSkill}
                  height="210"
                  width="210"
                  title="Sonidos de Vaca"
                  alt="Sonidos de Vaca" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-Vaca/dp/B084TSCMTY/ref=sr_1_11?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-11" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sonidos de Vaca</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row five">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_18?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
               <img src={UnofficialEasyButtonSkill}
                  height="210"
                  width="210"
                  alt="Botón fácil no oficial"
                  title="Botón fácil no oficial" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_18?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Botón fácil no oficial</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-Eructos/dp/B089ZVRH6R/ref=sr_1_6?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-6" target="_blank" rel="noopener noreferrer">
               <img src={BurpSoundsSkill}
                  height="210"
                  width="210"
                  alt="Sonidos de Eructos"
                  title="Sonidos de Eructos" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-Eructos/dp/B089ZVRH6R/ref=sr_1_6?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597371017&s=digital-skills&sr=1-6" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sonidos de Eructos</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-ciervo/dp/B08FHT25L5/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597420452&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={DeerSoundsSkill}
                  height="210"
                  width="210"
                  title="Sonidos de ciervo"
                  alt="Sonidos de ciervo" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.com.mx/Nickopanther-Sonidos-de-ciervo/dp/B08FHT25L5/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597420452&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sonidos de ciervo</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="container">
        <h2 className="center title">Alexa Skills in other Countries</h2>
        <p>If you live outside of Mexico and are interested in one of my
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

export default AlexaSkillsMexico;
