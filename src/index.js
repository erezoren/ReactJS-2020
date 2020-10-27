import React from 'react';
import ReactDOM from 'react-dom';

import '../css/main.css';

import {Exercise} from "./common/Exercise";
import {Container} from "./lab16/1/Container";
import {MyForm} from "./lab16/3/MyForm";
import {ListContainer} from "./lab16/2/ListContainer";

const App = () => {

  const exc2ItemList = ['ball', 'coffee', 'plant']

  return (
      <div>
        <Exercise title={"Exercise 1"}>
          <Container/>
        </Exercise>
        <Exercise title={"Exercise 2"}>
          <ListContainer itemList={exc2ItemList}/>
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
