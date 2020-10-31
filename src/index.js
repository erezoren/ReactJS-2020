import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';

import {Exercise} from "./common/Exercise";
import {SortableTable} from "./lab19/1/SortableTable";
import {FocusChanger} from "./lab22/1/ChangingFocusWithRef";
import {Viemo} from "./lab27/Viemo";

const App = () => {
  const lab19exc1Data = [
    ['id', 'Name', 'Country', 'Email'],
    [0, 'dan', 'Israel', 'dan@gmail.com'],
    [1, 'dana', 'Israel', 'dana@gmail.com'],
    [2, 'anna', 'Israel', 'anna@gmail.com'],
    [3, 'zina', 'UK', 'zina@gmail.com'],
  ];

  return (
      <div>
        <h2>**********Lab 19**********</h2>
        <Exercise title={"Exercise 1"}>
          <SortableTable data={lab19exc1Data}/>
        </Exercise>
        <h2>**********Lab 22**********</h2>
        <Exercise title={"Exercise 1"}>
          <FocusChanger/>
        </Exercise>
        <h2>**********Lab 27**********</h2>
        <Exercise title={"Exercise 1"}>
          <Viemo/>
        </Exercise>
      </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);
