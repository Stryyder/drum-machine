import React, { Component } from "react";

class Drumpad extends Component {
  handleClick = () => {
    let sound = document.getElementById(this.props.letter);
    let soundStyle = document.getElementById(this.props.id);
    document.getElementById("display").innerHTML = this.props.id;
    soundStyle.classList.toggle("drum-pad-active");
    setTimeout(() => {
      soundStyle.classList.toggle("drum-pad-active");
    }, 100);
    sound.play();
    sound.currentTime = 0;
  };

  keyPressed = event => {
    if (event.keyCode === this.props.letter.charCodeAt()) {
      this.handleClick();
    }
  };

  render() {
    return (
      <div id={this.props.id} className="drum-pad" onClick={this.handleClick}>
        {document.addEventListener("keydown", this.keyPressed)}

        {this.props.letter}
        <audio
          preload="auto"
          id={this.props.letter}
          src={this.props.src}
          ref={this.audio}
          className="clip"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

export default Drumpad;
