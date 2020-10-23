import React, {useEffect, useState} from "react";
import {ListDisplay} from "./ListDisplay";
import {SearchBox} from "./SearchBox";

export const ListContainer = () => {

  const itemList = ['ball', 'coffee', 'plant']
  const [search, setSearch] = useState('');
  const [list, setList] = useState(itemList);

  useEffect(() => {
    const filtered = itemList.filter(item => {
      return item.indexOf(search) > -1
    })
    setList(filtered);
  }, [search]);

  return (
      <div>
        <div><SearchBox searchCallback={(value) => setSearch(value)}/></div>
        <h3>Results:</h3>
        <div>
          {list.length > 0 ? <ListDisplay list={list}/> : <h2
              style={{color: 'red'}}>No Results</h2>}
        </div>
      </div>
  );

}
