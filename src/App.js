import React from "react";
import "./App.css";
import data from "./data.json";
import { SocialIcon } from "react-social-icons";
import Fullpage from "./components/Fullpage/Fullpage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="navigation" />

        <Fullpage className="first">
          <h1 className="title">{data.title}</h1>
          <h2>{data.subtitle}</h2>
       
          <div className="soicalIcons">
          {Object.keys(data.links).map((key) => {
            return  (<SocialIcon url={data.links[key]}  />)
          })
         }
           </div>
        </Fullpage>

        <div className="fullpage" />
        <h3>{data.sections[0].title}</h3>
        <p>{data.sections[0].items[0].content}</p>
        <div className="fullpage" />
      </div>
    );
  }
}

export default App;
