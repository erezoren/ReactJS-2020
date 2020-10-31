import React, {useState} from "react";

const tinycolor = require("tinycolor2");

export const ColorPicker2 = () => {

  const [color, setColor] = useState("#b81925");

  const baseStyle = {
    width: "50px",
    height: "50px",
    display: "inline-block",
  };

  function paintColorRange() {
    tinycolor("#f00").lighten(100).toString();
    let baseColor = tinycolor(color).lighten(25).toString();
    return Array.apply(null, Array(9)).map((entry, index) => {
      const bg = {
        background: tinycolor(baseColor).toRgbString()
      }
      baseColor = tinycolor(baseColor).darken(3).toString();
      return <div key={index} style={{...baseStyle, ...bg}}/>
    });
  }

  return (
      <div>
        <div>
          <input value={color} type={"color"}
                 onChange={(e) => setColor(e.target.value)}/>
          <div>
            {
              paintColorRange()
            }
          </div>

        </div>
      </div>
  );

}