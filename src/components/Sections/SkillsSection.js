import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import data from "../dataCopy.json";
import SkillCard from "./SkillCard";
import "./SkillsSection.css";
import DownIcon from './DownIcon';

export default class SkillsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorBack2: "#f5f1da",
    };

    this.changeColor = this.changeColor.bind(this);
  }

  // we have different options for th backgroundColor so we gotta create a condition to choose the colors from the array (it's not random)
  changeColor() {
    const colorsB2 = ['#f5f1da', '#dbe3e5', '#f7f2e7'];

    if (this.state.colorBack2 === colorsB2[0]) {
      this.setState({
        colorBack2: colorsB2[1],
      });
    } else if (this.state.colorBack2 === colorsB2[1]) {
      this.setState({
        colorBack2: colorsB2[2],
      });
    } else if (this.state.colorBack2 === colorsB2[2]) {
      this.setState({
        colorBack2: colorsB2[0],
      });
    }
    console.log(this.state.colorBack2);
  }

  render() {
    return (
      <Fullpage className="third" style={this.state.colorBack2}>
        <div id="skills">
          <h3 className="skillsH">{data.sections[1].title}</h3>
          <div className="cards-wrapper">
            {data.sections[1].items.map((eachSkill) => {
              return (
                <SkillCard skill={eachSkill} key={eachSkill.content.title} />
              );
            })}
          </div>
        </div>
        <h6>
          Made with{" "}
          <img
            className="heartIcon"
            src="https://img.icons8.com/wired/64/000000/like.png"
            alt="heart icon"
          />{" "}
          by Reihan, 2020
        </h6>
        <DownIcon marginBottom={"50px0"} yCoord={0} icon={data.icon.src2} />
      </Fullpage>
    );
  }
}
