import React, { useContext } from "react";
import "../App.css";
import { GameStateContext } from "../helpers/Contexts";
import { Questions } from "../helpers/Questions";

function EndScreen() {
  const { score, setScore, userName, setGameState } =
    useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1> Quiz Finished </h1>
      <h3> {userName} </h3>
      <h1>
        {" "}
        {score} / {Questions.length}{" "}
      </h1>
      <button onClick={restartQuiz}> Restart Quiz </button>
    </div>
  );
}

export default EndScreen;
