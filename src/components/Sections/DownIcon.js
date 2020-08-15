import React from 'react';


class DownIcon extends React.Component{

    render(){
        const yCoord = this.props.yCoord;
        return(
            <div>
                <div onClick={() =>{
                    window.scrollTo(0, yCoord);
                }}>
                <img 
                style={{
                    width: "30px",
                    height: "30px",
                    animation: "danceScroll 1s infinite alternate" ,
                    alignSelf: "center",
                    cursor: "pointer",
                    alignContent: "flex-end",
                    marginBottom: this.props.marginBottom
                }}
            className="scrollIcon"
            src={this.props.icon}
            alt="scroll icon"
            // onClick={this.props.onClick}
          />
                </div>
            </div>
        );
    }
}

export default DownIcon;