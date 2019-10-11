import React from "react";

const Controls = props => {
  return (
    <div className="controls">
      <h3>Power</h3>
      <div id="power-control">
        <div id="powerIndicator" onClick={props.togglePower}></div>
      </div>

      <div>
        <h3 id="display">Let's Play</h3>
      </div>

      <div id="volumeSlider">
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={props.volume}
          onChange={props.handleVolume}
        />
        <br />
        <label htmlFor="volume">Volume: {props.volumeDisplay}</label>
      </div>

      <h3>Bank</h3>
      <div className="optionToggle" id="bankToggle">
        <div className="optionToggleItem">A</div>
        <div className="optionToggleItem">B</div>
      </div>
    </div>
  );
};

export default Controls;
