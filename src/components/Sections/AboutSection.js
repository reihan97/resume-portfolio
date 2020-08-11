import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import data from "../dataCopy.json";
import "./AboutSection.css";

class AboutSection extends Component {
  render() {
    return (
      <div id="about">
        <Fullpage className="second">

          <h3> <img className="userPng" src={data.sections[0].items[0].image} alt="female user" />{data.sections[0].title}</h3>
          <p>{data.sections[0].items[0].content}</p>
        </Fullpage>
      </div>
    );
  }
}

export default AboutSection;
