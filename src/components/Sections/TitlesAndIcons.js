import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import { SocialIcon } from "react-social-icons";
import data from "../dataCopy.json";
import "./TitlesAndIcons.css";
import Nav from "./Nav.js";

class TitlesAndIcons extends Component {
  render() {
    return (
      <Fullpage className="first">
        <Nav className="firstPart"/>
        <div className="secondPart">
          <h1 className="title">{data.title}</h1>
          <h2>{data.subtitle}</h2>

          <div className="socialIcons">
            {Object.keys(data.links).map((key) => {
              return <SocialIcon url={data.links[key]} key={data.links[key]} />;
            })}
          </div>
          <img className="scrollIcon" src="https://img.icons8.com/ios/50/000000/circled-down-2.png"/>
        </div>
        
      </Fullpage>
    );
  }
}

export default TitlesAndIcons;
