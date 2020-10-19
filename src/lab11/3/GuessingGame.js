import React, {useState} from "react";

export default function GuessingGame(props) {

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
        <div><label>הכנס מספר</label></div>
        <input key={"guess"} type={"number"}
               onChange={(e) => checkGuess(e.target.value)}/>
        <div><label>{message}</label></div>


      </div>
  );

}