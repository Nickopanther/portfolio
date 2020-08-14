import React from 'react';
import { Helmet } from 'react-helmet';
import CatholicPrayersSkill from '../images/catholic-prayers-skill.png'
import RingDoorbellSkill from '../images/ring-doorbell-skill.png';
import WakeUpSkill from '../images/wake-up-skill.png';
import EaglesChantSkill from '../images/eagles-chant-skill.png';
import HowlingDogsSkill from '../images/howling-dogs-skill.png';
import TitanicSkill from '../images/titanic-skill.png';
import CleanupSkill from '../images/cleanup-game-skill.png';
import CowSoundsSkill from '../images/cow-sounds-skill.png';
import ElephantSoundsSkill from '../images/elephant-sounds-skill.png';
import LetsGoCampingSkill from '../images/lets-go-camping-skill.png';
import UnofficialEasyButtonSkill from '../images/unofficial-easy-button-skill-german.png';
import DeerSoundsSkill from '../images/deer-sounds-skill.png';
import BurpSoundsSkill from '../images/burp-sounds-skill-german.png';
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

const AlexaSkillsGermany = () => {
    return (
        <div className="AlexaSkillsGermany">
   <div className="container content">
      <Helmet>
         <title>Alexa Skills in Germany - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available on Amazon." />
         <meta name="keywords" content="nick azzarello, nickopanther, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills in Germany</h1>
      <p>A list of the many Alexa Skills I have created that are available to use
      on any Alexa device. Click on an image, or name, to learn more about a skill.</p>
      <hr />
      <h1 className="center title">Alexa Skills in Deutschland</h1>
      <p>Eine Liste der vielen Alexa Skills, die ich erstellt habe und die verwendet werden können
      auf jedem Alexa-Gerät. Klicken Sie auf ein Bild oder einen Namen, um mehr über eine skill zu erfahren.</p>
      <div className="center">
        <img src={Germany}
             height="135"
             width="240"
             alt="Germany"
             title="Germany"
         />
      </div>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_20?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-20" target="_blank" rel="noopener noreferrer">
               <img src={CatholicPrayersSkill}
                    height="210"
                    width="210"
                    alt="Katholische Gebete"
                    title="Katholische Gebete"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Catholic-Prayers/dp/B0787HK4FN/ref=sr_1_20?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-20" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Katholische Gebete</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430147&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
               <img src={RingDoorbellSkill}
                  height="210"
                  width="210"
                  alt="Klingelt an der Tür"
                  title="Klingelt an der Tür" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430147&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Klingelt an der Tür</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_21?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-21" target="_blank" rel="noopener noreferrer">
               <img src={WakeUpSkill}
                  height="210"
                  width="210"
                  alt="Wach auf"
                  title="Wach auf" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Wake-Up/dp/B077PML4M8/ref=sr_1_21?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-21" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Wach auf</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row two">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.de/Nickopanther-Klopf-an-die-T%C3%BCr/dp/B083D7Y2Y3/ref=sr_1_13?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
              <img src={KnockOnDoorSkill}
                  height="210"
                  width="210"
                  alt="Klopf an die Tür"
                  title="Klopf an die Tür" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.de/Nickopanther-Klopf-an-die-T%C3%BCr/dp/B083D7Y2Y3/ref=sr_1_13?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Klopf an die Tür</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Heulende-Hunde/dp/B082ZSTLCQ/ref=sr_1_14?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597431729&s=digital-skills&sr=1-14" target="_blank" rel="noopener noreferrer">
               <img src={HowlingDogsSkill}
                    height="210"
                    width="210"
                    alt="Heulende Hunde"
                    title="Heulende Hunde" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Heulende-Hunde/dp/B082ZSTLCQ/ref=sr_1_14?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597431729&s=digital-skills&sr=1-14" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Heulende Hunde</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usch-von-Affen/dp/B084DJ6ZCD/ref=sr_1_11?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-11" target="_blank" rel="noopener noreferrer">
              <img src={MonkeySoundsSkill}
                   height="210"
                   width="210"
                   alt="Geräusch von Affen"
                   title="Geräusch von Affen" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usch-von-Affen/dp/B084DJ6ZCD/ref=sr_1_11?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-11" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">Geräusch von Affen</h3>
              </a>
            </div>
         </div>
      </div>
      <div className="row three">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_7?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-7" target="_blank" rel="noopener noreferrer">
               <img src={CleanupSkill}
                    alt="Spiel Aufräumen"
                    title="Spiel Aufräumen"
                    height="210"
                    width="210"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_7?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-7" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Spiel Aufräumen</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usche-von-Flugzeugen/dp/B087C4LTFW/ref=sr_1_17?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-17" target="_blank" rel="noopener noreferrer">
              <img src={AirplaneSoundsSkill}
                 alt="Geräusche von Flugzeugen"
                 title="Geräusche von Flugzeugen"
                 height="210"
                 width="210"
              />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usche-von-Flugzeugen/dp/B087C4LTFW/ref=sr_1_17?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-17" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">Geräusche von Flugzeugen</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usche-von-Hubschraubern/dp/B08F3WJ9Q9/ref=sr_1_4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
                <img src={HelicopterSoundsSkill}
                     alt="Geräusche von Hubschraubern"
                     title="Geräusche von Hubschraubern"
                     height="210"
                     width="210"
                />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usche-von-Hubschraubern/dp/B08F3WJ9Q9/ref=sr_1_4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
              <h3 className="center title indigo-text text-darken-4">Geräusche von Hubschraubern</h3>
            </a>
          </div>
         </div>
      </div>
      <div className="row four">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-5" target="_blank" rel="noopener noreferrer">
               <img src={LetsGoCampingSkill}
                  height="210"
                  width="210"
                  alt="Lasst uns campen gehen"
                  title="Lasst uns campen gehen" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Camping-Trip/dp/B07D9XPJHX/ref=sr_1_5?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-5" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Lasst uns campen gehen</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Elefant-klingt/dp/B08413QSY7/ref=sr_1_12?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
               <img src={ElephantSoundsSkill}
                  height="210"
                  width="210"
                  alt="Elefant klingt"
                  title="Elefant klingt" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Elefant-klingt/dp/B08413QSY7/ref=sr_1_12?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Elefant klingt</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usche-von-K%C3%BChen/dp/B084TSCMTY/ref=sr_1_18?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597431072&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
               <img src={CowSoundsSkill}
                  height="210"
                  width="210"
                  title="Geräusche von Kühen"
                  alt="Geräusche von Kühen" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usche-von-K%C3%BChen/dp/B084TSCMTY/ref=sr_1_18?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597431072&s=digital-skills&sr=1-18" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Geräusche von Kühen</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row five">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_19?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-19" target="_blank" rel="noopener noreferrer">
               <img src={UnofficialEasyButtonSkill}
                  height="210"
                  width="210"
                  alt="Inoffizieller einfacher Knopf"
                  title="Inoffizieller einfacher Knopf" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_19?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-19" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Inoffizieller einfacher Knopf</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-R%C3%BClpsen-klingt/dp/B089ZVRH6R/ref=sr_1_6?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-6" target="_blank" rel="noopener noreferrer">
               <img src={BurpSoundsSkill}
                  height="210"
                  width="210"
                  alt="Rülpsen klingt"
                  title="Rülpsen klingt" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-R%C3%BClpsen-klingt/dp/B089ZVRH6R/ref=sr_1_6?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-6" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Rülpsen klingt</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usche-von-Hirschen/dp/B08FHT25L5/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-3" target="_blank" rel="noopener noreferrer">
               <img src={DeerSoundsSkill}
                  height="210"
                  width="210"
                  title="Geräusche von Hirschen"
                  alt="Geräusche von Hirschen" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.de/Nickopanther-Ger%C3%A4usche-von-Hirschen/dp/B08FHT25L5/ref=sr_1_3?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=nickopanther&qid=1597430262&s=digital-skills&sr=1-3" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">Geräusche von Hirschen</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="container">
        <h2 className="center title">Alexa Skills in other Countries</h2>
        <p>If you live outside of Germany and are interested in one of my
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

export default AlexaSkillsGermany;
