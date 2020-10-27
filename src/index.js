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
import {MyForm} from "./lab16/3/MyForm";
import {ListContainer} from "./lab16/2/ListContainer";
import {SortableTable} from "./lab19/1/SortableTable";

const App = () => {
  const lab19exc1Data = [
    ['id', 'Name', 'Country', 'Email'],
    [0, 'dan', 'Israel', 'dan@gmail.com'],
    [1, 'dana', 'Israel', 'dana@gmail.com'],
    [2, 'anna', 'Israel', 'anna@gmail.com'],
    [3, 'zina', 'UK', 'zina@gmail.com'],
  ];


  const exc2ItemList = ['ball', 'coffee', 'plant']
  return (
      <div>
        <h2>**********Lab 11**********</h2>
        <Exercise title={"Exercise 1"}>
          <TextList/>
        </Exercise>
        <Exercise title={"Exercise 2"}>
          <TimeConverter/>
        </Exercise>
        <Exercise title={"Exercise 3"}>
          <GuessingGame/>
        </Exercise>
        <Exercise title={"Exercise 4"}>
          <ColorPicker/>
        </Exercise>
        <Exercise title={"Exercise 5"}>
          <ColorPicker2/>
        </Exercise>
        <h2>**********Lab 16**********</h2>
        <Exercise title={"Exercise 1"}>
          <Container/>
        </Exercise>
        <Exercise title={"Exercise 2"}>
          <ListContainer itemList={exc2ItemList}/>
        </Exercise>
        <Exercise title={"Exercise 3"}>
          <MyForm/>
        </Exercise>
        <h2>**********Lab 19**********</h2>
        <Exercise title={"Exercise 1"}>
          <SortableTable data={lab19exc1Data}/>
        </Exercise>
      </div>
  )
};

// main.js
const root = document.querySelector('main');
ReactDOM.render(<App/>, root);
