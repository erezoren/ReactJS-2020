import React from "react";

export const SearchBox = (props) => {
  const {searchCallback} = props;

  return (
      <input style={{fontSize: "20px"}} placeholder={"type your search"}
             type={"text"} onChange={(e) => searchCallback(e.target.value)}/>
  );

}
