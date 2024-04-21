import React from "react";
import "./C5Style.css";

function Toggle() {
  // let isON = true;
  const [isOn, setIsOn] = React.useState(false);
  return (
    <div>
      <div className="pomodoro">
        <div>🎃</div>
        <div className="middle">
          <div>Pomodoro</div>
          <div>
            {isOn
              ? "Timed focus and rest intervals"
              : "Focus for 45min, rest for 15min"}
          </div>
        </div>
        <div className="end">{isOn ? "On" : "Off"}</div>
      </div>
      <button
        onClick={function () {
          setIsOn(!isOn);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default function C5() {
  return (
    <div>
      <Toggle />
    </div>
  );
}
