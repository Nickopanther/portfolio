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

const AlexaSkillsJapan = () => {
    return (
        <div className="AlexaSkillsJapan">
   <div className="container content">
      <Helmet>
         <title>Alexa Skills in Japan - Nick Azzarello</title>
         <meta name="description" content="Nick Azzarello has created Alexa Skills for recreational purposes. He has over twenty skills that are available on Amazon." />
         <meta name="keywords" content="nick azzarello, nickopanther, alexa skills, amazon alexa" />
      </Helmet>
      <h1 className="center title">Alexa Skills in Japan</h1>
      <p>A list of the many Alexa Skills I have created that are available to use
      on any Alexa device. Click on an image, or name, to learn more about a skill.</p>
      <hr />
      <h1 className="center title">日本のアレクサスキル</h1>
      <p>使用できる、私が作成した多くのAlexaスキルのリスト
      任意のAlexaデバイス。スキルの詳細については、画像または名前をクリックしてください。</p>
      <div className="center">
        <img src={Japan}
             height="135"
             width="240"
             alt="Japan"
             title="Japan"
         />
      </div>
      <div className="row one">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-%E8%B1%9A%E3%81%AE%E7%95%B0%E9%9F%B3/dp/B08CY9PR8D/ref=sr_1_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
               <img src={PigNoisesSkill}
                    height="210"
                    width="210"
                    alt="豚の異音"
                    title="豚の異音"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-%E8%B1%9A%E3%81%AE%E7%95%B0%E9%9F%B3/dp/B08CY9PR8D/ref=sr_1_2?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-2" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">豚の異音</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_12?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
               <img src={RingDoorbellSkill}
                  height="210"
                  width="210"
                  alt="リングドアベル"
                  title="リングドアベル" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-Ring-Doorbell/dp/B07MCSVRX2/ref=sr_1_12?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-12" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">リングドアベル</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-%E9%9B%BB%E8%BB%8A%E3%81%AE%E9%9F%B3/dp/B087CRTKLB/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-5" target="_blank" rel="noopener noreferrer">
               <img src={TrainSoundsSkill}
                  height="210"
                  width="210"
                  alt="電車の音"
                  title="電車の音" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-%E9%9B%BB%E8%BB%8A%E3%81%AE%E9%9F%B3/dp/B087CRTKLB/ref=sr_1_5?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-5" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">電車の音</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row two">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.co.jp/Nickopanther-%E3%83%89%E3%82%A2%E3%82%92%E3%83%8E%E3%83%83%E3%82%AF/dp/B083D7Y2Y3/ref=sr_1_9?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-9" target="_blank" rel="noopener noreferrer">
              <img src={KnockOnDoorSkill}
                  height="210"
                  width="210"
                  alt="ドアをノック"
                  title="ドアをノック" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.co.jp/Nickopanther-%E3%83%89%E3%82%A2%E3%82%92%E3%83%8E%E3%83%83%E3%82%AF/dp/B083D7Y2Y3/ref=sr_1_9?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-9" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">ドアをノック</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/gp/product/B082ZSTLCQ?ref=skillrw_dsk_pnps__1" target="_blank" rel="noopener noreferrer">
               <img src={HowlingDogsSkill}
                    height="210"
                    width="210"
                    alt="ハウリング犬"
                    title="ハウリング犬" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/gp/product/B082ZSTLCQ?ref=skillrw_dsk_pnps__1" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">ハウリング犬</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.co.jp/Nickopanther-%E3%83%93%E3%83%BC%E3%83%97%E3%83%9B%E3%83%BC%E3%83%B3/dp/B08359B999/ref=sr_1_10?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-10" target="_blank" rel="noopener noreferrer">
              <img src={BeepHornSkill}
                   height="210"
                   width="210"
                   alt="ビープホーン"
                   title="ビープホーン" />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.co.jp/Nickopanther-%E3%83%93%E3%83%BC%E3%83%97%E3%83%9B%E3%83%BC%E3%83%B3/dp/B08359B999/ref=sr_1_10?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-10" target="_blank" rel="noopener noreferrer">
               <h3 className="center title indigo-text text-darken-4">ビープホーン</h3>
              </a>
            </div>
         </div>
      </div>
      <div className="row three">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_14?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-14" target="_blank" rel="noopener noreferrer">
               <img src={CleanupSkill}
                    alt="クリーンアップゲーム"
                    title="クリーンアップゲーム"
                    height="210"
                    width="210"
                />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-Cleanup-Game/dp/B07BV3FDJD/ref=sr_1_14?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-14" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">クリーンアップゲーム</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.co.jp/Nickopanther-%E9%A3%9B%E8%A1%8C%E6%A9%9F%E3%81%AE%E9%9F%B3/dp/B087C4LTFW/ref=sr_1_6?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-6" target="_blank" rel="noopener noreferrer">
              <img src={AirplaneSoundsSkill}
                 alt="飛行機の音"
                 title="飛行機の音"
                 height="210"
                 width="210"
              />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.co.jp/Nickopanther-%E9%A3%9B%E8%A1%8C%E6%A9%9F%E3%81%AE%E9%9F%B3/dp/B087C4LTFW/ref=sr_1_6?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-6" target="_blank" rel="noopener noreferrer">
                <h3 className="center title indigo-text text-darken-4">飛行機の音</h3>
              </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
              <a href="https://www.amazon.co.jp/Nickopanther-%E3%83%98%E3%83%AA%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC%E3%81%AE%E9%9F%B3/dp/B08F3WJ9Q9/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
                <img src={HelicopterSoundsSkill}
                     alt="ヘリコプターの音"
                     title="ヘリコプターの音"
                     height="210"
                     width="210"
                />
              </a>
            </div>
            <div className="alexa-content">
              <a href="https://www.amazon.co.jp/Nickopanther-%E3%83%98%E3%83%AA%E3%82%B3%E3%83%97%E3%82%BF%E3%83%BC%E3%81%AE%E9%9F%B3/dp/B08F3WJ9Q9/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-1" target="_blank" rel="noopener noreferrer">
              <h3 className="center title indigo-text text-darken-4">ヘリコプターの音</h3>
            </a>
          </div>
         </div>
      </div>
      <div className="row four">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-%E7%8C%AB%E3%81%AE%E9%9F%B3/dp/B08667R388/ref=sr_1_7?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-7" target="_blank" rel="noopener noreferrer">
               <img src={CatSoundsSkill}
                  height="210"
                  width="210"
                  alt="猫の音"
                  title="猫の音" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-%E7%8C%AB%E3%81%AE%E9%9F%B3/dp/B08667R388/ref=sr_1_7?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-7" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">猫の音</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-%E3%83%AA%E3%82%B9%E3%81%AE%E9%9F%B3/dp/B087JFCHSL/ref=sr_1_4?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
               <img src={SquirrelSoundsSkill}
                  height="210"
                  width="210"
                  alt="リスの音"
                  title="リスの音" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-%E3%83%AA%E3%82%B9%E3%81%AE%E9%9F%B3/dp/B087JFCHSL/ref=sr_1_4?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597435816&s=digital-skills&sr=1-4" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">リスの音</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-%E7%89%9B%E3%81%AE%E9%9F%B3/dp/B084TSCMTY/ref=sr_1_8?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-8" target="_blank" rel="noopener noreferrer">
               <img src={CowSoundsSkill}
                  height="210"
                  width="210"
                  title="牛の音"
                  alt="牛の音" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-%E7%89%9B%E3%81%AE%E9%9F%B3/dp/B084TSCMTY/ref=sr_1_8?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-8" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">牛の音</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="row five">
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_13?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
               <img src={UnofficialEasyButtonSkill}
                  height="210"
                  width="210"
                  alt="非公式の簡単なボタン"
                  title="非公式の簡単なボタン" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-Staples-Easy-Button/dp/B07GDCJ526/ref=sr_1_13?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-13" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">非公式の簡単なボタン</h3>
               </a>
            </div>
         </div>
         <div className="alexa col s12 m4 l4">
            <div className="alexa-image">
               <a href="https://www.amazon.co.jp/Nickopanther-%E3%81%92%E3%81%A3%E3%81%B7%E9%9F%B3/dp/B089ZVRH6R/ref=sr_1_3?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-3" target="_blank" rel="noopener noreferrer">
               <img src={BurpSoundsSkill}
                  height="210"
                  width="210"
                  alt="げっぷ音"
                  title="げっぷ音" />
               </a>
            </div>
            <div className="alexa-content">
               <a href="https://www.amazon.co.jp/Nickopanther-%E3%81%92%E3%81%A3%E3%81%B7%E9%9F%B3/dp/B089ZVRH6R/ref=sr_1_3?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&dchild=1&keywords=nickopanther&qid=1597431960&s=digital-skills&sr=1-3" target="_blank" rel="noopener noreferrer">
                  <h3 className="center title indigo-text text-darken-4">げっぷ音</h3>
               </a>
            </div>
         </div>
      </div>
      <div className="container">
        <h2 className="center title">Alexa Skills in other Countries</h2>
        <p>If you live outside of Japan and are interested in one of my
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

export default AlexaSkillsJapan;
