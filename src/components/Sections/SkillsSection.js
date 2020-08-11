import React, { Component } from "react";
import Fullpage from "../Fullpage/Fullpage";
import data from "../dataCopy.json";
import SkillCard from "./SkillCard";
import './SkillsSection.css';

export default class SkillsSection extends Component {
  render() {
    return (
      <Fullpage className="third">
        <h3>{data.sections[1].title}</h3>
        <div className="cards-wrapper">
          {data.sections[1].items.map((eachSkill) => {
            return <SkillCard skill={eachSkill} key={eachSkill.content.title}/>;
          })}
        </div>
      </Fullpage>
    );
  }
}
