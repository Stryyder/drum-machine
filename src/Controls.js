import React, { Component } from "react";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: "1"
    };
  }

  togglePower = () => {
    let powerOff = document.getElementById("powerOff");
    let powerOn = document.getElementById("powerOn");

    if (powerOff.style.visibility === "visible") {
      powerOff.style.visibility = "hidden";
      powerOn.style.visibility = "visible";
    } else {
      powerOff.style.visibility = "visible";
      powerOn.style.visibility = "hidden";
    }
  };

  handleVolume = event => {
    this.setState({ volume: event.target.value });
    /*document
      .querySelectorAll("audio")
      .forEach(a => (a.volume = this.state.volume));*/
  };

  render() {
    return (
      <div className="controls">
        <h3>Power</h3>
        <div className="optionToggle" id="powerToggle">
          <div
            className="optionToggleItem"
            id="powerOff"
            onClick={this.togglePower}
          >
            OFF
          </div>
          <div
            className="optionToggleItem"
            id="powerOn"
            onClick={this.togglePower}
          >
            ON
          </div>
        </div>

        <div>
          <h2 id="instrumentLabel">Let's Play</h2>
        </div>

        <div id="volumeSlider">
          <input
            id="volume"
            type="range"
            min="0"
            max="100"
            step="1"
            value={this.state.volume}
            onChange={this.handleVolume}
          />
          <br />
          <label htmlFor="volume">Volume: {this.state.volume}</label>
        </div>

        <h3>Bank</h3>
        <div className="optionToggle" id="bankToggle">
          <div className="optionToggleItem">A</div>
          <div className="optionToggleItem">B</div>
        </div>
      </div>
    );
  }
}

export default Controls;
