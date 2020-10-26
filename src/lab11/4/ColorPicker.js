import React, {useState} from "react";

export const ColorPicker = (props) => {

  const [color, setColor] = useState(props.bgColor || "#b81925");
  const pickerSize = {
    height: "50px",
    width: "50px",
  }
  const red = {
    backgroundColor: "#b81925"
  };

  const green = {
    backgroundColor: "#69cc4a"
  };

  const blue = {
    backgroundColor: "#145fc3"
  };

  return (
      <div>
        <h2>Click a color</h2>
        <div style={{...red, ...pickerSize}}
             onClick={() => setColor(red.backgroundColor)}></div>
        <div style={{...green, ...pickerSize}}
             onClick={() => setColor(green.backgroundColor)}></div>
        <div style={{...blue, ...pickerSize}}
             onClick={() => setColor(blue.backgroundColor)}></div>
        <br/>
        <div style={{
          backgroundColor: color,
          border: "1px solid black",
          textAlign: "center"
        }}>
          <div>
            <h2>Choice</h2>
          </div>
        </div>
      </div>
  );

}