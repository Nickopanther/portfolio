import React, { Component } from 'react';
import './index.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Videos from './components/Videos';
import Websites from './components/Websites';
import AlexaSkills from './components/AlexaSkills';
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
              <Route exact path="/about-me" component={AboutMe} />
              <Route path="/videos" component={Videos} />
              <Route path="/websites" component={Websites} />
              <Route path="/alexa-skills" component={AlexaSkills} />
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
