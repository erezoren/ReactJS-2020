import React from "react";

export const Exercise = (props) => {
  return (
      <div>
        <h2 style={{textDecoration: "underline overline"}}>{props.title}</h2>
        {props.children}
        <hr/>
      </div>
  )
}
