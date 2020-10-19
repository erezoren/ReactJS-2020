import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';
import TextList from "./lab11/1/TextList";
import TimeConverter from "./lab11/2/TimeConverter";
import GuessingGame from "./lab11/3/GuessingGame";
import ColorPicker from "./lab11/4/ColorPicker";
import ColorPicker2 from "./lab11/5/ColorPicker2";

const App = () => {

  return (
      <div>
        <p>Exercise 1</p>
        <TextList/>
        <hr/>
        <p>Exercise 2</p>
        <TimeConverter/>
        <hr/>
        <p>Exercise 3</p>
        <GuessingGame/>
        <hr/>
        <p>Exercise 4</p>
        <ColorPicker/>
        <hr/>
        <p>Exercise 5</p>
        <ColorPicker2/>
      </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);
