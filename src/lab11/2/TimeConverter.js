import React, {useState} from "react";

export const TimeConverter = (props) => {

  const [seconds, setSeconds] = useState(0);

  const multipliers = {
    SECONDS: "SECONDS",
    MINUTES: "MINUTES",
    HOURS: "HOURS"

  }

  return (
      <div>
        <label>Seconds</label>
        <input key={multipliers.SECONDS} type={"text"} value={seconds}
               onChange={(e) => setSeconds(e.target.value)}/>
        <label>Minuets</label>
        <input key={multipliers.MINUTES} type={"text"} value={seconds / 60}
               onChange={(e) => setSeconds(e.target.value * 60)}/>
        <label>Hours</label>
        <input key={multipliers.HOURS} type={"text"} value={seconds / 3600}
               onChange={(e) => setSeconds(e.target.value * 3600)}/>


      </div>
  );

}