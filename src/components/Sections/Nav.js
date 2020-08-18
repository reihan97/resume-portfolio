import React from "react";
import "./Nav.css";
import data from "../dataCopy.json";
import { SocialIcon } from "react-social-icons";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.layer = React.createRef();
    this.closeIt = React.createRef();

    this.closeContact = this.closeContact.bind(this);
    this.openContact = this.openContact.bind(this);
  }

  openContact() {
    this.layer.current.style.width = "100vw";
  }

  closeContact() {
    this.layer.current.style.width = "0vw";
  }

  render() {
    return (
      <div className="navSection" id="navSec">
        <div className="colorful" onClick={this.props.onClick}>
          <img
            // src="https://img.icons8.com/pastel-glyph/64/000000/paint-palette.png"
            src="https://img.icons8.com/ios/50/000000/border-color.png"
            alt="change the pallet"
          />
        </div>

        <div className="goToSections">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#navSec" onClick={this.openContact}>
            Contact
          </a>
        </div>

        {/* The contact layer */}

        <div id="myContact" className="overlay" ref={this.layer}>
          <button
            className="colesbtn"
            onClick={this.closeContact}
            ref={this.closeIt}
          >
            {" "}
            Close
            {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/macos-close.png" alt="close Icon"/> */}
          </button>

          <div className="overlay-content">
            <div className="socialIcons">
              {Object.keys(data.links).map((key) => {
                return (
                  <SocialIcon url={data.links[key]} key={data.links[key]} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
