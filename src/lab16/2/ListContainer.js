import React, {useEffect, useState} from "react";
import {ListDisplay} from "./ListDisplay";
import {SearchBox} from "./SearchBox";

export const ListContainer = ({itemList}) => {

  const [list, setList] = useState(itemList);


  return (
      <div>
        <div><SearchBox
            searchCallback={(value) => setList(itemList.filter(item => {
              return item.indexOf(value) > -1
            }))}/></div>
        <h3>Results:</h3>
        <div>
          {list.length > 0 ? <ListDisplay list={list}/> : <h2
              style={{color: 'red'}}>No Results</h2>}
        </div>
      </div>
  );

}
