import React, {useState} from "react";

export const GuessingGame = (props) => {

  const [message, setMessage] = useState('');
  const [randNum, setRandNum] = useState(Math.floor(Math.random() * 1000 + 1));

  function checkGuess(value) {
    let asNumber = parseInt(value);
    if (isNaN(asNumber)) {
      asNumber = 0;
    }

    if (asNumber < randNum) {
      setMessage('קטן מדי')
    }
    if (asNumber > randNum) {
      setMessage('גדול מדי')
    }
    if (asNumber == randNum) {
      setMessage('פגעת בול')
    }

  }

  return (
      <div>
        <div><h3>הכנס מספר בין 1 ל 1000</h3></div>
        <input key={"guess"} type={"number"}
               onChange={(e) => checkGuess(e.target.value)}/>
        <div><h3>{message}</h3></div>


      </div>
  );

}