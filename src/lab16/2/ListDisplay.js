import React from "react";

export const ListDisplay = (props) => {
  const {list} = props

  return (
        <ol>
        {
          list.map((item)=>{
           return <li style={{fontSize:"30px"}}>{item}</li>
          })
        }
        </ol>
  );

}
