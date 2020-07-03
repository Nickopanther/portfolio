import React, { Component } from 'react';
//import './App.css';
import './index.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Videos from './components/Videos';
import Websites from './components/Websites';
import AlexaSkills from './components/AlexaSkills';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={AboutMe} />
              <Route path="/videos" component={Videos} />
              <Route path="/websites" component={Websites} />
              <Route path="/alexa-skills" component={AlexaSkills} />
              <Route path="/contact-me" component={ContactMe} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
