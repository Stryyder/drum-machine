import React, { Component } from "react";
import "./App.css";
import Drumpad from "./Drumpad";
import Controls from "./Controls";
import q from "./sounds/1.wav";
import w from "./sounds/2.wav";
import e from "./sounds/3.wav";
import a from "./sounds/4.wav";
import s from "./sounds/5.wav";
import d from "./sounds/6.wav";
import z from "./sounds/7.wav";
import x from "./sounds/8.wav";
import c from "./sounds/9.wav";
import q2 from "./sounds/10.wav";
import w2 from "./sounds/11.wav";
import e2 from "./sounds/12.wav";
import a2 from "./sounds/13.wav";
import s2 from "./sounds/14.wav";
import d2 from "./sounds/15.wav";
import z2 from "./sounds/16.wav";
import x2 from "./sounds/17.wav";
import c2 from "./sounds/18.wav";

const data = [
  { id: "C4", keyTrigger: "Q", src: q, src2: q2, id2: "clap" },
  { id: "D4", keyTrigger: "W", src: w, src2: w2, id2: "hat2" },
  { id: "E4", keyTrigger: "E", src: e, src2: e2, id2: "hiss" },
  { id: "F4", keyTrigger: "A", src: a, src2: a2, id2: "kick2" },
  { id: "G4", keyTrigger: "S", src: s, src2: s2, id2: "openHat2" },
  { id: "A4", keyTrigger: "D", src: d, src2: d2, id2: "triangle2" },
  { id: "B4", keyTrigger: "Z", src: z, src2: z2, id2: "crash2" },
  { id: "C5", keyTrigger: "X", src: x, src2: x2, id2: "deepKick" },
  { id: "D5", keyTrigger: "C", src: c, src2: c2, id2: "snare4" }
];

const ON = "rgba(0,255,0,1)";
const OFF = "rgba(0,255,0,0)";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      powerStyle: ON,
      volume: "0.2",
      volumeDisplay: "20",
      bankA: "checked",
      bankB: "",
      introSong: ["E", "W", "Q", "W", "Q", "Q", "E", "S", "A", "D", "X", "X"]
    };
  }

  componentDidMount() {
    // set initial volume so people's ears are okay
    document
      .querySelectorAll("audio")
      .forEach(a => (a.volume = this.state.volume));
  }

  togglePower = () => {
    this.setState({ power: !this.state.power });
    let powerIndicator = document.getElementById("powerIndicator");

    if (this.state.power) {
      this.setState({ powerStyle: OFF });
      powerIndicator.style.background = OFF;
    } else {
      this.setState({ powerStyle: ON });
      powerIndicator.style.background = ON;
    }

    data.map(item =>
      document.getElementById(item["id"]).classList.toggle("drum-pad-active")
    );
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

  toggleBank = () => {
    if (this.state.bankA === "checked") {
      this.setState({ bankA: "", bankB: "checked" });
    } else {
      this.setState({ bankA: "checked", bankB: "" });
    }
  };

  render() {
    return (
      <div id="drum-machine">
        <div id="pad-display">
          <h1 id="branding">Drum Machine</h1>
          {data.map(d => (
            <Drumpad
              key={d.id}
              id={d.id}
              keyTrigger={d.keyTrigger}
              src={d.src}
              power={this.state.power}
            />
          ))}
          ;
        </div>
        <div id="controls">
          <Controls
            power={this.state.powerStyle}
            togglePower={this.togglePower}
            volume={this.state.volume}
            handleVolume={this.handleVolume}
            volumeDisplay={this.state.volumeDisplay}
            powerStyle={this.state.powerStyle}
            bankA={this.state.bankA}
            bankB={this.state.bankB}
            toggleBank={this.toggleBank}
          />
        </div>
      </div>
    );
  }
}

export default App;
