import React, {useState} from "react";

const tinycolor = require("tinycolor2");

export default function ColorPicker2() {

  const [color, setColor] = useState("#b81925");

  const baseStyle = {
    width: "50px",
    height: "50px",
    display: "inline-block",
  };

  function paintDivs() {
    tinycolor("#f00").lighten(100).toString();
    let baseColor = tinycolor(color).lighten(25).toString();

    let divs = [];
    for (let i = 0; i < 9; i++) {
      const bg = {
        background: tinycolor(baseColor).toRgbString()
      }

      divs.push(<div style={{...baseStyle, ...bg}}/>)
      baseColor = tinycolor(baseColor).darken(3).toString();
    }

    return divs;
  }

  return (
      <div>
        <div>
          <input value={color} type={"color"} onChange={(e) => setColor(e.target.value)}/>
          <div>
            {
              paintDivs()
            }
          </div>

        </div>
      </div>
  );



}