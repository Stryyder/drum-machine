import React, { Component } from "react";
import "./App.css";
import Drumpad from "./Drumpad";
import Controls from "./Controls";
import q from "./sounds/crash.wav";
import w from "./sounds/cymbal.wav";
import e from "./sounds/hat.wav";
import a from "./sounds/kick.wav";
import s from "./sounds/openHat.wav";
import d from "./sounds/snare1.wav";
import z from "./sounds/snare2.wav";
import x from "./sounds/snare3.wav";
import c from "./sounds/triangle.wav";
import q2 from "./sounds/clap.wav";
import w2 from "./sounds/hat2.wav";
import e2 from "./sounds/hiss.wav";
import a2 from "./sounds/kick2.wav";
import s2 from "./sounds/openHat2.wav";
import d2 from "./sounds/triangle2.wav";
import z2 from "./sounds/crash2.wav";
import x2 from "./sounds/deepKick.wav";
import c2 from "./sounds/snare4.wav";

const data = [
  { id: "crash", letter: "Q", src: q, src2: q2, id2: "clap" },
  { id: "cymbal", letter: "W", src: w, src2: w2, id2: "hat2" },
  { id: "hat", letter: "E", src: e, src2: e2, id2: "hiss" },
  { id: "kick", letter: "A", src: a, src2: a2, id2: "kick2" },
  { id: "openHat", letter: "S", src: s, src2: s2, id2: "openHat2" },
  { id: "snare1", letter: "D", src: d, src2: d2, id2: "triangle2" },
  { id: "snare2", letter: "Z", src: z, src2: z2, id2: "crash2" },
  { id: "snare3", letter: "X", src: x, src2: x2, id2: "deepKick" },
  { id: "triangle", letter: "C", src: c, src2: c2, id2: "snare4" }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      volume: "",
      bankExpand: false,
      introSong: ["E", "W", "Q", "W", "Q", "Q", "E", "S", "A", "D", "X", "X"]
    };
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <h1 id="branding">Drum Machine</h1>
          {data.map(d => (
            <Drumpad
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              src2={d.src2}
            />
          ))}
          ;
        </div>
        <div id="controls">
          <Controls bank={this.state.bankExpand} />
        </div>
      </div>
    );
  }
}

export default App;
