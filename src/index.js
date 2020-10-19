import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';
import TextList from "./lab11/1/TextList";
import TimeConverter from "./lab11/2/TimeConverter";

const App = () => {

  return (
      <div>
        <p>Exercise 1</p>
        <TextList/>
        <hr/>
        <p>Exercise 2</p>
        <TimeConverter/>
      </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);
