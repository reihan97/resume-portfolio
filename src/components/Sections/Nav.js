import React from "react";
import './Nav.css';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navSection">
        <div className="colorful">
          <img src="https://img.icons8.com/pastel-glyph/64/000000/paint-palette.png" />
        </div>

        <div className="goToSections">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </div>
      </div>
    );
  }
}
