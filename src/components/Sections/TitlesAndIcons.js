import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
// import { SocialIcon } from "react-social-icons";
import data from "../dataCopy.json";
import "./TitlesAndIcons.css";
import Nav from "./Nav.js";
import DownIcon from "./DownIcon";

class TitlesAndIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorBack1: "#39c18f63",
    };

    this.changeStyle = this.changeStyle.bind(this);
  }

  changeStyle() {
    const colorsB = ["#39c18f63", "#fabea7", "#fddb3a", "#f7e7bd"];

    if (this.state.colorBack1 === colorsB[0]) {
      this.setState({ colorBack1: colorsB[1] });
    } else if (this.state.colorBack1 === colorsB[1]) {
      this.setState({ colorBack1: colorsB[2] });
    } else if (this.state.colorBack1 === colorsB[2]) {
      this.setState({ colorBack1: colorsB[3] });
    } else if (this.state.colorBack1 === colorsB[3]) {
      this.setState({ colorBack1: colorsB[0] });
    }
  }

  render() {
    return (
      <Fullpage className="first" style={this.state.colorBack1}>
        <Nav className="firstPart" onClick={this.changeStyle} />
        <div className="secondPart">
          <h1 className="title">{data.title}</h1>
          <h2>{data.subtitle}</h2>
          <DownIcon icon={data.icon.src} marginBottom={"-163px"} yCoord={725} />
        </div>
      </Fullpage>
    );
  }
}

export default TitlesAndIcons;
