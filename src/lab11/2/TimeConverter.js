import React, {useState} from "react";

export default function TimeConverter(props) {

  const [seconds, setSeconds] = useState(0);

  function updateTime(multiplier, value) {
    switch (multiplier) {

      case "minuts":
        setSeconds(value * 60);
        break;
      case "hours":
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
                   'seconds', e.target.value)}/>
        <label>Minuts</label>
        <input key={"minuts"} type={"text"} value={seconds / 60}
               onChange={(e) => updateTime(
                   'minuts', e.target.value)}/>
        <label>Hours</label>
        <input key={"hours"} type={"text"} value={seconds / 3600}
               onChange={(e) => updateTime(
                   'hours', e.target.value)}/>


      </div>
  );

}