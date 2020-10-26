import React, {useState} from "react";
import {Game} from "./Game";
import {Score} from "./Score";

export const Container = () => {

  const [score, setScore] = useState(0);

  return (
      <div>
        <Game updateScoreCallback={(win) => {
          setScore(win ? score + 10 : score - 5)
        }}/>
        <Score score={score}/>
        <button onClick={() => setScore(0)}>משחק חדש</button>
      </div>
  );

}
