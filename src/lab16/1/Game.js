import React, {useEffect, useState} from 'react';

export const Game = ({setScore, score}) => {

  const [randNum, setRandNum] = useState(0);

  const baseStyle = {
    width: "50px",
    height: "50px",
    display: "inline-block",
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setRandNum(Math.floor(Math.random() * 10 + 1));
    }, 2000);

    return () => {
      clearInterval(interval);
    }
  }, [randNum]);

  function createGame() {
    return Array.apply(null, Array(10)).map((entry, index) => {
      const bg = {
        background: index == randNum ? "red" : "gray"
      }
      return <div key={index}
          onClick={() => setScore(index == randNum ? score + 10 : score - 5)}
          style={{...baseStyle, ...bg}}/>;
    })

  }

  return (
      <div>
        {createGame()}
      </div>
  );

}
