import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';
import TextList from "./lab11/TextList";

const App = () => {

  return (
      <div>
      <TextList/>
  </div>
)
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
