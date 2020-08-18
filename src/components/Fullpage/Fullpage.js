import React, { Component } from "react";
import "./Fullpage.css";

class Fullpage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        className={`fullpage ${this.props.className || ""}`}
        style={{ backgroundColor: this.props.style }}
      >
        {children}
        <div>
          <div className="snowflakes" aria-hidden="true">
            {/* <div  className="snowflake">❅</div>
            <div  className="snowflake">❆</div>
            <div  className="snowflake">❅</div>
            <div  className="snowflake">❆</div>
            <div  className="snowflake">❅</div>
            <div  className="snowflake">❆</div>
            <div  className="snowflake">❅</div>
            <div  className="snowflake">❆</div>
            <div  className="snowflake">❅</div>
            <div  className="snowflake">❆</div>
            <div  className="snowflake">❅</div>
            <div  className="snowflake">❆</div>

            <div  className="snowflake">❆</div>
            <div  className="snowflake">❆</div> */}
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
            <div className="snowflake">•</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Fullpage;
