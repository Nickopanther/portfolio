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
import LetsGoCampingSkill from '../images/lets-go-camping-skill.png';
import UnofficialEasyButtonSkill from '../images/unofficial-easy-button-skill-french.png';
import DeerSoundsSkill from '../images/deer-sounds-skill.png';
import BurpSoundsSkill from '../images/burp-sounds-skill-french.png';
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

const AlexaSkillsFrance = () => {
    return (
        <div className="AlexaSkillsFrance">
   <div className="container content">
      <Helmet>
         <title>Alexa Skills in France - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available on Amazon." />
         <meta name="keywords" content="nick azzarello, nickopanther, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills in France</h1>
      <p>A list of the many Alexa Skills I have created that are available to use
      on any Alexa device. Click on an image, or name, to learn more about a skill.</p>
      <hr />
      <h1 className="center title">Alexa Skills en France</h1>
      <p>Une liste des nombreuses compétences Alexa que j'ai créées et qui peuvent être utilisées
      sur n'importe quel appareil Alexa. Cliquez sur une image ou un nom pour en savoir plus sur une compétence.</p>
      <div className="center">
        <img src={France}
             height="135"
             width="240"
             alt="France"
             title="France"
         />
      </div>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_21?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-21" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill}
                    height="210"
                    width="210"
                    alt="Prières Catholiques"
                    title="Prières Catholiques"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_21?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-21" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Prières Catholiques</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_16?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366653&s=digital-skills&sr=1-16" target="_blank" rel="noopener noreferrer">
               <img src={RingDoorbellSkill}
                  height="210"
                  width="210"
                  alt="Sonnerie de Porte"
                  title="Sonnerie de Porte" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_16?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366653&s=digital-skills&sr=1-16" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sonnerie de Porte</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_22?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-22" target="_blank" rel="noopener noreferrer">
               <img src={WakeUpSkill}
                  height="210"
                  width="210"
                  alt="Se réveiller"
                  title="Se réveiller" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_22?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-22" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Se réveiller</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row two">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.fr/Nickopanther-Frappe-%C3%A0-la-Porte/dp/B083D7Y2Y3/ref=sr_1_13?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
              <img src={KnockOnDoorSkill}
                  height="210"
                  width="210"
                  alt="Frappe à la Porte"
                  title="Frappe à la Porte" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.fr/Nickopanther-Frappe-%C3%A0-la-Porte/dp/B083D7Y2Y3/ref=sr_1_13?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Frappe à la Porte</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Most-Famous-Princess-Bride-Quote/dp/B07KDQDDSK/ref=sr_1_17?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597367620&s=digital-skills&sr=1-17" target="_blank" rel="noopener noreferrer">
               <img src={MostFamousPrincessBrideQuoteSkill}
                    height="210"
                    width="210"
                    alt="Citation la plus célèbre de la Princess Bride"
                    title="Citation la plus célèbre de la Princess Bride" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Most-Famous-Princess-Bride-Quote/dp/B07KDQDDSK/ref=sr_1_17?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597367620&s=digital-skills&sr=1-17" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Citation la plus célèbre de la Princess Bride</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.fr/Nickopanther-Sons-de-Singe/dp/B084DJ6ZCD/ref=sr_1_11?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-11" target="_blank" rel="noopener noreferrer">
              <img src={MonkeySoundsSkill}
                   height="210"
                   width="210"
                   alt="Sons de Singe"
                   title="Sons de Singe" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.fr/Nickopanther-Sons-de-Singe/dp/B084DJ6ZCD/ref=sr_1_11?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-11" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Sons de Singe</h3>
              </a>
            </div>
         </div>
      </div>
      <div className="row three">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_20?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-20" target="_blank" rel="noopener noreferrer">
               <img src={CleanupSkill}
                    alt="Jeu de Nettoyages"
                    title="Jeu de Nettoyages"
                    height="210"
                    width="210"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_20?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-20" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Jeu de Nettoyages</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.fr/Nickopanther-Sons-DAvion/dp/B087C4LTFW/ref=sr_1_7?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-7" target="_blank" rel="noopener noreferrer">
              <img src={AirplaneSoundsSkill}
                 alt="Sons D'Avion"
                 title="Sons D'Avion"
                 height="210"
                 width="210"
              />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.fr/Nickopanther-Sons-DAvion/dp/B087C4LTFW/ref=sr_1_7?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-7" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Sons D'Avion</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.fr/Nickopanther-Sons-dh%C3%A9licopt%C3%A8re/dp/B08F3WJ9Q9/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
                <img src={HelicopterSoundsSkill}
                     alt="Sons d'hélicoptère"
                     title="Sons d'hélicoptère"
                     height="210"
                     width="210"
                />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.fr/Nickopanther-Sons-dh%C3%A9licopt%C3%A8re/dp/B08F3WJ9Q9/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
              <h3 className="center title indigo-text text-darken-4">Sons d'hélicoptère</h3>
            </a>
          </div>
         </div>
      </div>
      <div className="row four">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_19?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-19" target="_blank" rel="noopener noreferrer">
               <img src={LetsGoCampingSkill}
                  height="210"
                  width="210"
                  alt="Allons camper"
                  title="Allons camper" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_19?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-19" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Allons camper</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Sons-d%C3%A9l%C3%A9phants/dp/B08413QSY7/ref=sr_1_12?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
               <img src={ElephantSoundsSkill}
                  height="210"
                  width="210"
                  alt="Sons d'éléphants"
                  title="Sons d'éléphants" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Sons-d%C3%A9l%C3%A9phants/dp/B08413QSY7/ref=sr_1_12?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sons d'éléphants</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Sons-de-Vache/dp/B084TSCMTY/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-10" target="_blank" rel="noopener noreferrer">
               <img src={CowSoundsSkill}
                  height="210"
                  width="210"
                  title="Sons de Vache"
                  alt="Sons de Vache" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Sons-de-Vache/dp/B084TSCMTY/ref=sr_1_10?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366739&s=digital-skills&sr=1-10" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sons de Vache</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row five">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_18?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366742&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
               <img src={UnofficialEasyButtonSkill}
                  height="210"
                  width="210"
                  alt="Bouton facile non officiel"
                  title="Bouton facile non officiel" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_18?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597366742&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Bouton facile non officiel</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Sons-de-Rots/dp/B089ZVRH6R/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=sons+de+rots&qid=1597366935&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={BurpSoundsSkill}
                  height="210"
                  width="210"
                  alt="Sons de Rots"
                  title="Sons de Rots" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Sons-de-Rots/dp/B089ZVRH6R/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=sons+de+rots&qid=1597366935&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sons de Rots</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.fr/Nickopanther-Sons-de-cerf/dp/B08FHT25L5/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597367060&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
               <img src={DeerSoundsSkill}
                  height="210"
                  width="210"
                  title="Sons de cerf"
                  alt="Sons de cerf" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.fr/Nickopanther-Sons-de-cerf/dp/B08FHT25L5/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597367060&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Sons de cerf</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="container">
        <h2 className="center title">Alexa Skills in other Countries</h2>
        <p>If you live outside of France and are interested in one of my
        Alexa Skills, click on the respective flag from your country to see what
        is available.</p>

        <div className="row one">
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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
           <div className="alexa col s12 m3 l3">
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

export default AlexaSkillsFrance;
