import React from "react";

const Controls = props => {
  return (
    <>
      <h3>POWER</h3>
      <div id="power-control" className="controlItem">
        <div
          id="powerIndicator"
          onClick={props.togglePower}
          style={{ background: props.powerStyle }}
        ></div>
      </div>

      <div id="volumeSlider" className="controlItem">
        <label htmlFor="volume">Volume: {props.volumeDisplay}</label>
        <br />
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={props.volume}
          onChange={props.handleVolume}
        />
      </div>

      <div className="optionToggle controlItem" id="bankToggle">
        <label htmlFor="volumeControls">BANK</label>
        <form id="volumeControls">
          <input
            id="bankA"
            type="radio"
            name="bank"
            value="A"
            className="optionToggleItem"
            checked={props.bankA}
            onClick={props.toggleBank}
          />
          <label htmlFor="bankA">A</label>
          <br />
          <input
            id="bankB"
            type="radio"
            name="bank"
            value="B"
            className="optionToggleItem"
            checked={props.bankB}
            onClick={props.toggleBank}
          />
          <label htmlFor="bankB">B</label>
        </form>
      </div>

      <div>
        <h3 id="display">Let's Play</h3>
      </div>
    </>
  );
};

export default Controls;
