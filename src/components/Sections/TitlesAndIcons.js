import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import { SocialIcon } from "react-social-icons";
import data from "../dataCopy.json";
import "./TitlesAndIcons.css";
import Nav from "./Nav.js";
import DownIcon from './DownIcon';

class TitlesAndIcons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorBack1: "#eebb4d",
      // colorBack2 : '#',
      // colorBack3 : '#'
    };

    this.changeStyle = this.changeStyle.bind(this);
    // this.changeColor = this.changeColor.bind(this);
    // this.mouseOutPrevColor = this.mouseOutPrevColor.bind(this);
  }

  // changeColor(){
  //   this.setState({
  //     colorH : this.state.colorH === "black" ? "yellow" : "black"
  //   });
  // }

  // mouseOutPrevColor(){
  //   this.setState ({colorH : "yellow"
  // });
  // }

  changeStyle() {
    // const cb1 = this.state.colorBack1;
    // this.setState((state) => {
    //   const colorsB = ["#eebb4d", "#776d8a", "#e0ece4"];
    //   if (state.colorBack1 === colorsB[0]) {
    //     state.colorBack1 = colorsB[1];
    //   } else if (state.colorBack1 === colorsB[1]) {
    //     state.colorBack1 = colorsB[2];
    //   } else if (state.colorBack1 === colorsB[2]) {
    //     state.colorBack1 = colorsB[0];
    //   }
    // });

    const colorsB = ["#eebb4d", "#776d8a", "#e0ece4"];
    
    if (this.state.colorBack1 === colorsB[0]) {
      this.setState ({colorBack1 : colorsB[1]});
    } else if (this.state.colorBack1 === colorsB[1]) {
      this.setState ({colorBack1 : colorsB[2]});
    } else if (this.state.colorBack1 === colorsB[2]) {
      this.setState ({colorBack1 : colorsB[0]});
    }
    }

    // this.setState({
    //   colorBack1: cb1 === "#eebb4d" ? "#776d8a" : "#e0ece4",
    // });
  

  render() {
    return (
      <Fullpage className="first" style={this.state.colorBack1}>
        <Nav className="firstPart" onClick={this.changeStyle} />
        <div className="secondPart">
          <h1
            className="title"
            // onMouseOver={this.changeColor}
            // onMouseOut={this.changeColor}
            // // onMouseOut={this.mouseOutPrevColor}

            // style={{
            //   color: this.state.colorH
            // }}
          >
            {data.title}
          </h1>
          <h2>{data.subtitle}</h2>

          <div className="socialIcons">
            {Object.keys(data.links).map((key) => {
              return <SocialIcon url={data.links[key]} key={data.links[key]} />;
            })}
          </div>
            <DownIcon icon={data.icon.src} 
              marginBottom={"-143px"}
              yCoord={725}
            />
        </div>
      </Fullpage>
    );
  }
}

export default TitlesAndIcons;
