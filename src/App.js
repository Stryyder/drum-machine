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
import q2 from "./sounds/10.mp3";
import w2 from "./sounds/11.mp3";
import e2 from "./sounds/12.mp3";
import a2 from "./sounds/13.mp3";
import s2 from "./sounds/14.mp3";
import d2 from "./sounds/15.mp3";
import z2 from "./sounds/16.mp3";
import x2 from "./sounds/17.mp3";
import c2 from "./sounds/18.mp3";
import on from "./sounds/on.wav";
import off from "./sounds/off.wav";

const INSTRUMENT_BANK = [
  {
    id: "C4",
    keyTrigger: "Q",
    src: q,
    instrument: "C4",
    src2: q2,
    instrument2: "Voice"
  },
  {
    id: "D4",
    keyTrigger: "W",
    src: w,
    instrument: "D4",
    src2: w2,
    instrument2: "pack"
  },
  {
    id: "E4",
    keyTrigger: "E",
    src: e,
    instrument: "E4",
    src2: e2,
    instrument2: "for"
  },
  {
    id: "F4",
    keyTrigger: "A",
    src: a,
    instrument: "F4",
    src2: a2,
    instrument2: "sale"
  },
  {
    id: "G4",
    keyTrigger: "S",
    src: s,
    instrument: "G4",
    src2: s2,
    instrument2: "now:"
  },
  {
    id: "A4",
    keyTrigger: "D",
    src: d,
    instrument: "A4",
    src2: d2,
    instrument2: "Kilted"
  },
  {
    id: "B4",
    keyTrigger: "Z",
    src: z,
    instrument: "B4",
    src2: z2,
    instrument2: "Raccoon"
  },
  {
    id: "C5",
    keyTrigger: "X",
    src: x,
    instrument: "C5",
    src2: x2,
    instrument2: "on"
  },
  {
    id: "D5",
    keyTrigger: "C",
    src: c,
    instrument: "D5",
    src2: c2,
    instrument2: "Etsy!"
  }
];

const ON = "rgba(0,255,0,1)";
const OFF = "rgba(0,255,0,0)";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      data: INSTRUMENT_BANK,
      bank: "A",
      powerStyle: ON,
      volume: "0.2",
      volumeDisplay: "20",
      bankA: "checked",
      bankB: ""
    };
  }

  componentDidMount() {
    this.volumeLeveler();
  }

  volumeLeveler() {
    // set initial volume so people's ears are okay
    document
      .querySelectorAll("audio")
      .forEach(a => (a.volume = this.state.volume));
  }

  togglePower = () => {
    this.setState({ power: !this.state.power });
    let powerIndicator = document.getElementById("powerIndicator");
    let powerSound = document.getElementById("powerSound");

    // play a cool power on and off sound
    powerSound.play();
    powerSound.currentTime = 0;

    if (this.state.power) {
      this.setState({ powerStyle: OFF });
      powerIndicator.style.background = OFF;
      document.getElementById("display").innerHTML = "Power: Off";
    } else {
      this.setState({ powerStyle: ON });
      powerIndicator.style.background = ON;
      document.getElementById("display").innerHTML = "Power: On";
    }

    this.state.data.map(item =>
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
      this.setState({ bankA: "", bankB: "checked", bank: "B" });
    } else {
      this.setState({ bankA: "checked", bankB: "", bank: "A" });
    }

    this.volumeLeveler();
  };

  render() {
    return (
      <div id="drum-machine">
        <audio id="powerSound" preload="auto" src={this.state.power ? on : off}>
          {" "}
          Your browser does not support the audio element.
        </audio>
        <div id="pad-display">
          <h1 id="branding">Drum Machine</h1>
          {INSTRUMENT_BANK.map(d => (
            <Drumpad
              key={d.id}
              id={d.id}
              keyTrigger={d.keyTrigger}
              src1={d.src}
              src2={d.src2}
              bank={this.state.bank}
              bankA={this.state.bankA}
              bankB={this.state.bankB}
              power={this.state.power}
              instrument={d.instrument}
              instrument2={d.instrument2}
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
