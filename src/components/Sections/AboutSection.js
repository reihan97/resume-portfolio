import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import data from "../dataCopy.json";
import './AboutSection.css';

class AboutSection extends Component {
  render() {
    return (
      <Fullpage className="second">
         <img src={data.sections[0].items[0].image} alt="female user"/>
        <h3>{data.sections[0].title}</h3>
        <p>{data.sections[0].items[0].content}</p>
      </Fullpage>
    );
  }
}

export default AboutSection;
