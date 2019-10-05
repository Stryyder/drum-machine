import React, { Component } from "react";
import "./App.css";
import Drumpad from "./Drumpad";

const data = [
  { id: "test", letter: "Q", src: "sounds/q.wav" },
  { id: "clap1", letter: "W", src: "sounds/w.wav" },
  { id: "clap2", letter: "E", src: "sounds/e.wav" },
  { id: "clap3", letter: "A", src: "sounds/a.wav" },
  { id: "clap4", letter: "S", src: "sounds/s.wav" },
  { id: "clap5", letter: "D", src: "sounds/d.wav" },
  { id: "clap6", letter: "Z", src: "sounds/z.wav" },
  { id: "clap7", letter: "X", src: "sounds/x.wav" },
  { id: "clap8", letter: "C", src: "sounds/c.wav" }
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      volume: "",
      bank: "A",
      soundPlayed: ""
    };
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display">
          <h1 id="branding">Drum Machine</h1>
          {data.map(d => (
            <Drumpad key={d.id} id={d.id} letter={d.letter} src={d.src} />
          ))}
          ;
        </div>
        <div id="controls">
          <pre>Power toggle pad pressed label volume slider Bank toggle</pre>
        </div>
      </div>
    );
  }
}

export default App;
