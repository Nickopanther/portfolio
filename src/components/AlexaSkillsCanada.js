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

const AlexaSkillsCanada = () => {
    return (
        <div className="AlexaSkillsCanada">
   <div className="container content">
      <Helmet>
         <title>Alexa Skills in Canada - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available on Amazon in Canada." />
         <meta name="keywords" content="nick azzarello, nickopanther, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills in Canada</h1>
      <p>A list of the many Alexa Skills I have created that are available to use
      on any Alexa device. Click on an image, or name, to learn more about a skill.</p>
      <hr />
      <h1 className="center title">Alexa Skills au Canada</h1>
      <p>Une liste des nombreuses compétences Alexa que j'ai créées et qui peuvent être utilisées
      sur n'importe quel appareil Alexa. Cliquez sur une image ou un nom pour en savoir plus sur une compétence.</p>
      <div className="center">
        <img src={Canada}
             height="135"
             width="240"
             alt="Canada"
             title="Canada"
         />
      </div>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_1?dchild=1&keywords=catholic+prayers&qid=1597336018&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill}
                    height="210"
                    width="210"
                    alt="Catholic Prayers / Prières Catholiques"
                    title="Catholic Prayers / Prières Catholiques"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_1?dchild=1&keywords=catholic+prayers&qid=1597336018&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Catholic Prayers / Prières Catholiques</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Sonnerie-de-Porte/dp/B07MCSVRX2/ref=sr_1_1?dchild=1&keywords=ring+doorbell&qid=1597336364&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={RingDoorbellSkill}
                  height="210"
                  width="210"
                  alt="Ring Doorbell / Sonnerie de Porte"
                  title="Ring Doorbell / Sonnerie de Porte" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Sonnerie-de-Porte/dp/B07MCSVRX2/ref=sr_1_1?dchild=1&keywords=ring+doorbell&qid=1597336364&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Ring Doorbell / Sonnerie de Porte</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_4?dchild=1&keywords=wake+up&qid=1597336517&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
               <img src={WakeUpSkill}
                  height="210"
                  width="210"
                  alt="Wake Up / Se réveiller"
                  title="Wake Up / Se réveiller" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_4?dchild=1&keywords=wake+up&qid=1597336517&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Wake Up / Se réveiller</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row two">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.ca/Frappe-%C3%A0-la-Porte/dp/B083D7Y2Y3/ref=sr_1_1?dchild=1&keywords=knock+on+door&qid=1597347884&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
              <img src={KnockOnDoorSkill}
                  height="210"
                  width="210"
                  alt="Knock on Door / Frappe à la Porte"
                  title="Knock on Door / Frappe à la Porte" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.ca/Frappe-%C3%A0-la-Porte/dp/B083D7Y2Y3/ref=sr_1_1?dchild=1&keywords=knock+on+door&qid=1597347884&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Knock on Door / Frappe à la Porte</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Citation-plus-c%C3%A9l%C3%A8bre-Princess-Bride/dp/B07KDQDDSK/ref=sr_1_1?dchild=1&keywords=princess+bride+quote&qid=1597336848&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={MostFamousPrincessBrideQuoteSkill}
                    height="210"
                    width="210"
                    alt="Most Famous Princess Bride Quote / Citation la plus célèbre de la Princess Bride"
                    title="Most Famous Princess Bride Quote / Citation la plus célèbre de la Princess Bride" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Citation-plus-c%C3%A9l%C3%A8bre-Princess-Bride/dp/B07KDQDDSK/ref=sr_1_1?dchild=1&keywords=princess+bride+quote&qid=1597336848&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Most Famous Princess Bride Quote / Citation la plus célèbre de la Princess Bride</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.ca/Nickopanther-Monkey-Sounds/dp/B084DJ6ZCD/ref=sr_1_1?dchild=1&keywords=monkey%20sounds&language=fr_CA&qid=1597348048&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
              <img src={MonkeySoundsSkill}
                   height="210"
                   width="210"
                   alt="Monkey Sounds / Sons de Singe"
                   title="Monkey Sounds / Sons de Singe" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.ca/Nickopanther-Monkey-Sounds/dp/B084DJ6ZCD/ref=sr_1_1?dchild=1&keywords=monkey%20sounds&language=fr_CA&qid=1597348048&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Monkey Sounds / Sons de Singe</h3>
              </a>
            </div>
         </div>
      </div>
      <div className="row three">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Jeu-de-Nettoyages/dp/B07BV3FDJD/ref=sr_1_2?dchild=1&keywords=clean+up+game&qid=1597337502&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
               <img src={CleanupSkill}
                    alt="Cleanup Game / Jeu de Nettoyages"
                    title="Cleanup Game / Jeu de Nettoyages"
                    height="210"
                    width="210"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Jeu-de-Nettoyages/dp/B07BV3FDJD/ref=sr_1_2?dchild=1&keywords=clean+up+game&qid=1597337502&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Cleanup Game / Jeu de Nettoyages</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.ca/Nickopanther-Airplane-Sounds/dp/B087C4LTFW/ref=sr_1_1?dchild=1&keywords=airplane+sounds&qid=1597346491&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
              <img src={AirplaneSoundsSkill}
                 alt="Airplane Sounds / Sons D'Avion"
                 title="Airplane Sounds / Sons D'Avion"
                 height="210"
                 width="210"
              />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.ca/Nickopanther-Airplane-Sounds/dp/B087C4LTFW/ref=sr_1_1?dchild=1&keywords=airplane%20sounds&language=fr_CA&qid=1597346491&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Airplane Sounds / Sons D'Avion</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.ca/Sons-dh%C3%A9licopt%C3%A8re/dp/B08F3WJ9Q9/ref=sr_1_1?dchild=1&keywords=helicopter+sounds&qid=1597347474&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                <img src={HelicopterSoundsSkill}
                     alt="Helicopter Sounds / Sons d'hélicoptère"
                     title="Helicopter Sounds / Sons d'hélicoptère"
                     height="210"
                     width="210"
                />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.ca/Sons-dh%C3%A9licopt%C3%A8re/dp/B08F3WJ9Q9/ref=sr_1_1?dchild=1&keywords=helicopter+sounds&qid=1597347474&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
              <h3 className="center title indigo-text text-darken-4">Helicopter Sounds / Sons d'hélicoptère</h3>
            </a>
          </div>
         </div>
      </div>
      <div className="row four">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Allons-camper/dp/B07D9XPJHX/ref=sr_1_1?dchild=1&keywords=let%27s+go+camping&qid=1597338200&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={LetsGoCampingSkill}
                  height="210"
                  width="210"
                  alt="Let's Go Camping / Allons camper"
                  title="Let's Go Camping / Allons camper" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Allons-camper/dp/B07D9XPJHX/ref=sr_1_1?dchild=1&keywords=let%27s+go+camping&qid=1597338200&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Let's Go Camping / Allons camper</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Nickopanther-Elephant-Sounds/dp/B08413QSY7/ref=sr_1_1?dchild=1&keywords=elephant+sound&qid=1597338908&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={ElephantSoundsSkill}
                  height="210"
                  width="210"
                  alt="Elephant Sounds / Sons d'éléphants"
                  title="Elephant Sounds / Sons d'éléphants" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Nickopanther-Elephant-Sounds/dp/B08413QSY7/ref=sr_1_1?dchild=1&keywords=elephant+sound&qid=1597338908&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Elephant Sounds / Sons d'éléphants</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Sons-de-Vache/dp/B084TSCMTY/ref=sr_1_1?dchild=1&keywords=cow+sound&qid=1597339130&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={CowSoundsSkill}
                  height="210"
                  width="210"
                  title="Cow Sounds / Sons de Vache"
                  alt="Cow Sounds / Sons de Vache" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Sons-de-Vache/dp/B084TSCMTY/ref=sr_1_1?dchild=1&keywords=cow+sound&qid=1597339130&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Cow Sounds / Sons de Vache</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row five">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_1?dchild=1&keywords=easy+button&qid=1597339233&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={UnofficialEasyButtonSkill}
                  height="210"
                  width="210"
                  alt="Unofficial Easy Button / Bouton facile non officiel"
                  title="Unofficial Easy Button / Bouton facile non officiel" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_1?dchild=1&keywords=easy+button&qid=1597339233&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Unofficial Easy Button / Bouton facile non officiel</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Nickopanther-Burp-Sounds/dp/B089ZVRH6R/ref=sr_1_1?dchild=1&keywords=burp+sounds&qid=1597339380&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={BurpSoundsSkill}
                  height="210"
                  width="210"
                  alt="Burp Sounds / Sons de Rots"
                  title="Burp Sounds / Sons de Rots" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Nickopanther-Burp-Sounds/dp/B089ZVRH6R/ref=sr_1_1?dchild=1&keywords=burp+sounds&qid=1597339380&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Burp Sounds / Sons de Rots</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Sons-de-cerf/dp/B08FHT25L5/ref=sr_1_1?dchild=1&keywords=deer+sounds&qid=1597339511&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={DeerSoundsSkill}
                  height="210"
                  width="210"
                  title="Deer Sounds / Sons de cerf"
                  alt="Deer Sounds / Sons de cerf" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Sons-de-cerf/dp/B08FHT25L5/ref=sr_1_1?dchild=1&keywords=deer+sounds&qid=1597339511&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Deer Sounds / Sons de cerf</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row six">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.ca/Nickopanther-Eagles-Chant/dp/B082X9JVQN/ref=sr_1_1?dchild=1&keywords=eagles%20chant&language=en_CA&qid=1597336753&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
              <img src={EaglesChantSkill}
               height="210"
               width="210"
               alt="Eagles Chant"
               title="Eagles Chant" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.ca/Nickopanther-Eagles-Chant/dp/B082X9JVQN/ref=sr_1_1?dchild=1&keywords=eagles%20chant&language=en_CA&qid=1597336753&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Eagles Chant</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.ca/-/fr/dp/B078PWMV84/ref=sr_1_8?dchild=1&ie=UTF8&keywords=titanic&language=en_CA&qid=1597336994&s=digital-skills&sr=1-8" target="_blank" rel="noopener noreferrer">
            <img src={TitanicSkill}
                 height="210"
                 width="210"
                 alt="Titanic (1912) vs Titan (1898) Facts"
                 title="Titanic (1912) vs Titan (1898) Facts"
             />
            </a>
         </div>
         <div className="alexa-content">
            <a href="https://www.amazon.ca/-/fr/dp/B078PWMV84/ref=sr_1_8?dchild=1&ie=UTF8&keywords=titanic&language=en_CA&qid=1597336994&s=digital-skills&sr=1-8" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Titanic (1912) vs Titan (1898) Facts</h3>
            </a>
         </div>
         </div>
         <div className="alexa col s12 m4 l4">
         <div className="alexa-image">
            <a href="https://www.amazon.ca/Nickopanther-The-Ugly-Barnacle/dp/B077S3THH7/ref=sr_1_2?dchild=1&keywords=the+ugly+barnacle&qid=1597337596&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
            <img src={TheUglyBarnacleSkill}
                 height="210"
                 width="210"
                 alt="The Ugly Barnacle"
                 title="The Ugly Barnacle"
             />
            </a>
         </div>
         <div className="alexa-content">
            <a href="https://www.amazon.ca/Nickopanther-The-Ugly-Barnacle/dp/B077S3THH7/ref=sr_1_2?dchild=1&keywords=the+ugly+barnacle&qid=1597337596&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">The Ugly Barnacle</h3>
            </a>
         </div>
         </div>
      </div>
      <div className="row seven">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Nickopanther-Italy-Sights/dp/B088WDCFWR/ref=sr_1_1?dchild=1&keywords=italy+sights&qid=1597337882&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={ItalySightsSkill}
                  height="210"
                  width="210"
                  title="Italy Sights"
                  alt="Italy Sights" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Nickopanther-Italy-Sights/dp/B088WDCFWR/ref=sr_1_1?dchild=1&keywords=italy+sights&qid=1597337882&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Italy Sights</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
                <a href="https://www.amazon.ca/Nickopanther-Christmas-Guitar/dp/B087R641LM/ref=sr_1_1?dchild=1&keywords=christmas+guitar&qid=1597337700&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                <img src={ChristmasGuitarSkill}
                     height="210"
                     width="210"
                     alt="Christmas Guitar"
                     title="Christmas Guitar" />
                </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.ca/Nickopanther-Christmas-Guitar/dp/B087R641LM/ref=sr_1_1?dchild=1&keywords=christmas+guitar&qid=1597337700&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
              <h3 className="center title indigo-text text-darken-4">Christmas Guitar</h3>
           </a>
      </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.ca/Nickopanther-Romeo-and-Juliet-Quotes/dp/B084LFJCRB/ref=sr_1_1?dchild=1&keywords=romeo+and+juliet+quotes&qid=1597338113&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={RomeoAndJulietQuotesSkill}
                  height="210"
                  width="210"
                  title="Romeo and Juliet Quotes"
                  alt="Romeo and Juliet Quotes" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.ca/Nickopanther-Romeo-and-Juliet-Quotes/dp/B084LFJCRB/ref=sr_1_1?dchild=1&keywords=romeo+and+juliet+quotes&qid=1597338113&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Romeo and Juliet Quotes</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="container">
        <h2 className="center title">Alexa Skills in other Countries</h2>
        <p>If you live outside of Canada and are interested in one of my
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

export default AlexaSkillsCanada;
