import React, {useState} from "react";
import {Game} from "./Game";
import {Score} from "./Score";

export const Container = () => {

  const [score, setScore] = useState(0);

  return (
      <div>
        <Game setScore={setScore} score={score}/>
        <Score score={score}/>
        <button onClick={() => setScore(0)}>משחק חדש</button>
      </div>
  );

}
