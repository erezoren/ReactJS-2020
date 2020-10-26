import React, {useEffect, useState} from 'react';

export const Game = (props) => {

  const [randNum, setRandNum] = useState(0);

  const {updateScoreCallback} = props;

  const baseStyle = {
    width: "50px",
    height: "50px",
    display: "inline-block",
  };

  useEffect(() => {
    let sinterval = setInterval(() => {
      setRandNum(Math.floor(Math.random() * 10 + 1));
    }, 2000);

    return () => {
      clearInterval(sinterval);
    }
  }, [randNum]);

  function paintDivs() {
    let divs = [];
    for (let i = 1; i <= 10; i++) {
      const bg = {
        background: i == randNum ? "red" : "gray"
      }
      divs.push(<div onClick={() => updateScoreCallback(i == randNum)}
                     style={{...baseStyle, ...bg}}/>)

    }

    return divs;
  }

  return (
      <div>
        {paintDivs()}
      </div>
  );

}
