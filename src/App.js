import React, { Component } from "react";
import "./App.css";
import Drumpad from "./Drumpad";
import Controls from "./Controls";
import q from "./sounds/q.wav";
import w from "./sounds/w.wav";
import e from "./sounds/e.wav";
import a from "./sounds/a.wav";
import s from "./sounds/s.wav";
import d from "./sounds/d.wav";
import z from "./sounds/z.wav";
import x from "./sounds/x.wav";
import c from "./sounds/c.wav";
import q2 from "./sounds/q2.wav";
import w2 from "./sounds/w2.wav";
import e2 from "./sounds/e2.wav";
import a2 from "./sounds/a2.wav";
import s2 from "./sounds/s2.wav";
import d2 from "./sounds/d2.wav";
import z2 from "./sounds/z2.wav";
import x2 from "./sounds/x2.wav";
import c2 from "./sounds/c2.wav";

const data = [
  { id: "test", letter: "Q", src: q, src2: q2 },
  { id: "clap1", letter: "W", src: w, src2: w2 },
  { id: "clap2", letter: "E", src: e, src2: e2 },
  { id: "clap3", letter: "A", src: a, src2: a2 },
  { id: "clap4", letter: "S", src: s, src2: s2 },
  { id: "clap5", letter: "D", src: d, src2: d2 },
  { id: "clap6", letter: "Z", src: z, src2: z2 },
  { id: "clap7", letter: "X", src: x, src2: x2 },
  { id: "clap8", letter: "C", src: c, src2: c2 }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      volume: "",
      bankExpand: false,
      soundPlayed: ""
    };

    this.bankHandler = this.bankHandler.bind(this);
  }

  bankHandler() {
    //return (this.state.bank === "1") ? this.setState(bank)
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
          <Controls bank={this.bankHandler} />
        </div>
      </div>
    );
  }
}

export default App;
