import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';

import {Exercise} from "./common/Exercise";
import {TextList} from "./lab11/1/TextList";
import {TimeConverter} from "./lab11/2/TimeConverter";
import {GuessingGame} from "./lab11/3/GuessingGame";
import {ColorPicker} from "./lab11/4/ColorPicker";
import {ColorPicker2} from "./lab11/5/ColorPicker2";
import {Container} from "./lab16/1/Container";
import {ListContainer} from "./lab16/2/ListContainer";
import {MyForm} from "./lab16/3/MyForm";

const App = () => {

  return (
      <div>
        <Exercise title={"Exercise 1"}>
          <Container/>
        </Exercise>
        <Exercise title={"Exercise 2"}>
          <ListContainer/>
        </Exercise>
        <Exercise title={"Exercise 3"}>
          <MyForm/>
        </Exercise>
      </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);
