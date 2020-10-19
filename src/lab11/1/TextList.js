import React, {useState} from "react";

export default function TextList(props) {

  const [text, setText] = useState('');

  function getInputs(numOfInputs) {
    let inputs = [];
    for (let i = 0; i < numOfInputs; i++) {
      inputs.push(<div><input key={i} type={"text"} value={text}
                              onChange={(e) => setText(
                                  e.target.value)}/></div>)
    }

    return inputs;
  }

  return (
      <div>
        {
          getInputs(5)
        }
      </div>
  );

}

  let count=0;
  function* counter(){
    yield count++;
  };