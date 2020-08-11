import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import data from "../dataCopy.json";
import SkillCard from "./SkillCard";
import "./SkillsSection.css";

export default class SkillsSection extends Component {
  render() {
    return (
      <Fullpage className="third">
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
        <h6>Made with <img className="heartIcon" src="https://img.icons8.com/wired/64/000000/like.png"/> by Reihan, 2020</h6>
      </Fullpage>
    );
  }
}
