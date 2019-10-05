import React, { Component } from "react";

class Drumpad extends Component {
  constructor(props) {
    super(props);

    //this.audio = React.createRef;
    this.handleClick = this.handleClick.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  handleClick() {
    let sound = document.getElementById(this.props.letter);
    sound.play();
    sound.currentTime = 0;
  }

  keyPressed(event) {
    if (event.keyCode === this.props.letter.charCodeAt(0)) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div id={this.props.id} className="drum-pad" onClick={this.handleClick}>
        {document.addEventListener("keydown", this.keyPressed)}
        {this.props.letter}
        <audio
          //preload="auto"
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
