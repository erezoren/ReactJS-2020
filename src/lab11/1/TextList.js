import React, {useState} from "react";

export const TextList = (props) => {

  const [text, setText] = useState('');

  function getInputs(numOfInputs) {
   return Array(5).map((item,index)=>{
      <input
          key={index}
          type={"text"}
          value={text}
          onChange={(e) => setText(e.target.value)}
      />});
  }

  return (
      <div>
        {
          getInputs(5)
        }
      </div>
  );

}

let count = 0;

function* counter() {
  yield count++;
};