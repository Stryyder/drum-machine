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

const INSTRUMENT_BANK = [
  {
    id: "C4",
    keyTrigger: "Q",
    src: q,
    instrument: "C4",
    src2: q2,
    instrument2: "test1"
  },
  {
    id: "D4",
    keyTrigger: "W",
    src: w,
    instrument: "D4",
    src2: w2,
    instrument2: "test2"
  },
  {
    id: "E4",
    keyTrigger: "E",
    src: e,
    instrument: "E4",
    src2: e2,
    instrument2: "test3"
  },
  {
    id: "F4",
    keyTrigger: "A",
    src: a,
    instrument: "F4",
    src2: a2,
    instrument2: "test4"
  },
  {
    id: "G4",
    keyTrigger: "S",
    src: s,
    instrument: "G4",
    src2: s2,
    instrument2: "test5"
  },
  {
    id: "A4",
    keyTrigger: "D",
    src: d,
    instrument: "A4",
    src2: d2,
    instrument2: "test6"
  },
  {
    id: "B4",
    keyTrigger: "Z",
    src: z,
    instrument: "B4",
    src2: z2,
    instrument2: "test7"
  },
  {
    id: "C5",
    keyTrigger: "X",
    src: x,
    instrument: "C5",
    src2: x2,
    instrument2: "test8"
  },
  {
    id: "D5",
    keyTrigger: "C",
    src: c,
    instrument: "D5",
    src2: c2,
    instrument2: "test9"
  }
];

const ON = "rgba(0,255,0,1)";
const OFF = "rgba(0,255,0,0)";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      bank: "A",
      powerStyle: ON,
      volume: "0.2",
      volumeDisplay: "20",
      bankA: "checked",
      bankB: "",
      introSong: ["E", "W", "Q", "W", "Q", "Q", "E", "S", "A", "D", "X", "X"]
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

    if (this.state.power) {
      this.setState({ powerStyle: OFF });
      powerIndicator.style.background = OFF;
    } else {
      this.setState({ powerStyle: ON });
      powerIndicator.style.background = ON;
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
