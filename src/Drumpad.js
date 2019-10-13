import React, { Component } from "react";

class Drumpad extends Component {
  handleClick = () => {
    if (this.props.power) {
      let sound = document.getElementById(this.props.keyTrigger);
      let soundDiv = document.getElementById(this.props.id);
      document.getElementById("display").innerHTML = this.props.instrument;
      soundDiv.classList.toggle("drum-pad-active");
      setTimeout(() => {
        soundDiv.classList.toggle("drum-pad-active");
      }, 100);
      sound.play();
      sound.currentTime = 0;
    }
  };

  keyPressed = event => {
    if (event.keyCode === this.props.keyTrigger.charCodeAt()) {
      this.handleClick();
    }
  };

  selectInstruments = () => {
    if (this.props.bank === "A") {
      document
        .getElementById(this.props.keyTrigger)
        .setAttribute("src", this.props.src1);
    } else {
      document
        .getElementById(this.props.keyTrigger)
        .setAttribute("src", this.props.src2);
    }
  };

  render() {
    return (
      <div id={this.props.id} className="drum-pad" onClick={this.handleClick}>
        {document.addEventListener("keydown", this.keyPressed)}

        {this.props.keyTrigger}

        <audio
          preload="auto"
          id={this.props.keyTrigger}
          src={this.props.bank === "A" ? this.props.src1 : this.props.src2}
          className="clip"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Drumpad;
