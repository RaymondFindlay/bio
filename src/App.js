import React, { Component } from 'react' 
import Navbar from './components/Navbar'
import Section from './components/Section'
import Home from './components/Home'
import strings from './ResourceStrings'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Section
          title="About Me"
          subtitle={strings.about.bio}
          type=""
          id="about"
        />
        <Section
          title="Contact"
          subtitle="content"
          type=""
          id="contact"
        />
      </div>
      //put in bar at bottom maybe?
    );
  }
}

export default App;
