import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import github from "../../Assets/contacts/github.png";
import EndGameModal from "../EndGameModal/EndGameModal";
import { formatTime } from "../../Utils/formatTime";
import NewGameButton from "../NewGameButton/NewGameButton";

function Header({ completed, moveCount }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (completed < 8) {
      interval = setInterval(() => setTime((prevState) => prevState + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [completed]);

  return (
    <React.Fragment>
      <div className={styles.header}>
        <NewGameButton />
        <p className="Time_Move_display">
          Completed: {completed} &nbsp;&nbsp; Move: {moveCount} &nbsp;&nbsp;
          Time: &nbsp;{formatTime(time)}
        </p>
        <a
          href="https://github.com/canberkonem/reversed-spider-solitaire"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github logo" />
        </a>
      </div>
      {completed === 8 && (
        <EndGameModal time={time} setTime={setTime} moveCount={moveCount} />
      )}
    </React.Fragment>
  );
}

export default Header;
