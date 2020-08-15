import React from "react";
import "./App.css";
import TitlesAndIcons from "./components/Sections/TitlesAndIcons";
import AboutSection from './components/Sections/AboutSection';
import SkillsSection from './components/Sections/SkillsSection';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />

        <TitlesAndIcons />
        <AboutSection />
        <SkillsSection /> 
        
      </div>
    );
  }
}

export default App;
