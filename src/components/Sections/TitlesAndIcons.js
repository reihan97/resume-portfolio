import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import { SocialIcon } from "react-social-icons";
import data from "../dataCopy.json";
import './TitlesAndIcons.css';


class TitlesAndIcons extends Component {
  render() {
    return (
      <Fullpage className="first">
         
        <h1 className="title">{data.title}</h1>
        <h2>{data.subtitle}</h2>

        <div className="soicalIcons">
          {Object.keys(data.links).map((key) => {
            return <SocialIcon url={data.links[key]} key={data.links[key]} />;
          })}
        </div>
      </Fullpage>
    );
  }
}

export default TitlesAndIcons;
