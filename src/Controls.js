import React, { Component } from "react";

class Controls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: "0.2",
      volumeDisplay: "20"
    };
  }

  componentDidMount() {
    document
      .querySelectorAll("audio")
      .forEach(a => (a.volume = this.state.volume));
  }

  togglePower = () => {
    let powerOff = document.getElementById("powerOff");
    let powerOn = document.getElementById("powerOn");

    
  };

  handleVolume = event => {
    this.setState({
      volume: event.target.value,
      volumeDisplay: Math.round(event.target.value * 100)
    });
    document
      .querySelectorAll("audio")
      .forEach(a => (a.volume = event.target.value));
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
          <h2 id="display">Let's Play</h2>
        </div>

        <div id="volumeSlider">
          <input
            id="volume"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={this.state.volume}
            onChange={this.handleVolume}
          />
          <br />
          <label htmlFor="volume">Volume: {this.state.volumeDisplay}</label>
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
