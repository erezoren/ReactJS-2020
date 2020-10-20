import React, {useState} from "react";

export const TimeConverter = (props) => {

  const [seconds, setSeconds] = useState(0);

  const multipliers = {
    SECONDS: "SECONDS",
    MINUTES: "MINUTES",
    HOURS: "HOURS"

  }

  function updateTime(multiplier, value) {
    switch (multiplier) {

      case multipliers.MINUTES:
        setSeconds(value * 60);
        break;
      case multipliers.HOURS:
        setSeconds(value * 3600);
        break;

      default:
        setSeconds(value);
    }
  }

  return (
      <div>
        <label>Seconds</label>
        <input key={"seconds"} type={"text"} value={seconds}
               onChange={(e) => updateTime(
                   multipliers.SECONDS, e.target.value)}/>
        <label>Minuts</label>
        <input key={multipliers.MINUTES} type={"text"} value={seconds / 60}
               onChange={(e) => updateTime(
                   'minuts', e.target.value)}/>
        <label>Hours</label>
        <input key={multipliers.HOURS} type={"text"} value={seconds / 3600}
               onChange={(e) => updateTime(
                   'hours', e.target.value)}/>


      </div>
  );

}