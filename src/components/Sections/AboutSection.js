import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import data from "../dataCopy.json";
import "./AboutSection.css";
import DownIcon from './DownIcon';


class AboutSection extends Component {
  render() {
    return (
      <div id="about">
        <Fullpage className="second" style={{
          backgroundColor : this.props.style
        }}>

          <h3> <img className="userPng" src={data.sections[0].items[0].image} alt="female user" />{data.sections[0].title}</h3>
          <p>{data.sections[0].items[0].content}</p>
        </Fullpage>
        <DownIcon icon={data.icon.src} marginBottom={"70px"} yCoord={1450} />
      </div>
    );
  }
}

export default AboutSection;
