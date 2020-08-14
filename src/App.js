import React, { Component } from 'react';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Videos from './components/Videos';
import Websites from './components/Websites';
import AlexaSkills from './components/AlexaSkills';
import AlexaSkillsAustralia from './components/AlexaSkillsAustralia';
import AlexaSkillsFrance from './components/AlexaSkillsFrance';
import AlexaSkillsGermany from './components/AlexaSkillsGermany';
import AlexaSkillsItaly from './components/AlexaSkillsItaly';
import AlexaSkillsJapan from './components/AlexaSkillsJapan';
import AlexaSkillsMexico from './components/AlexaSkillsMexico';
import AlexaSkillsSpain from './components/AlexaSkillsSpain';
import AlexaSkillsUnitedKingdom from './components/AlexaSkillsUnitedKingdom';
import AlexaSkillsCanada from './components/AlexaSkillsCanada';
import AlexaSkillsBrazil from './components/AlexaSkillsBrazil';
import AlexaSkillsIndia from './components/AlexaSkillsIndia';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';
import PrivacyPolicy from './components/PrivacyPolicy';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={AboutMe} />
              <Route path="/videos" component={Videos} />
              <Route path="/websites" component={Websites} />
              <Route path="/alexa-skills" component={AlexaSkills} />
              <Route path="/alexa-skills-australia" component={AlexaSkillsAustralia} />
              <Route path="/alexa-skills-france" component={AlexaSkillsFrance} />
              <Route path="/alexa-skills-germany" component={AlexaSkillsGermany} />
              <Route path="/alexa-skills-italy" component={AlexaSkillsItaly} />
              <Route path="/alexa-skills-japan" component={AlexaSkillsJapan} />
              <Route path="/alexa-skills-mexico" component={AlexaSkillsMexico} />
              <Route path="/alexa-skills-spain" component={AlexaSkillsSpain} />
              <Route path="/alexa-skills-united-kingdom" component={AlexaSkillsUnitedKingdom} />
              <Route path="/alexa-skills-canada" component={AlexaSkillsCanada} />
              <Route path="/alexa-skills-brazil" component={AlexaSkillsBrazil} />
              <Route path="/alexa-skills-india" component={AlexaSkillsIndia} />
              <Route path="/contact-me" component={ContactMe} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
            <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
