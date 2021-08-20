import React, { useState } from "react";
import styles from "./EndGameModal.module.css";
import { formatTime } from "../../Utils/formatTime";
import BackHomeButton from "../BackHomeButton/BackHomeButton";
function EndGameModal({ time, moveCount, setTime }) {
  const [name, setName] = useState("");
  const timeDisplay = formatTime(time);

  function handleChange(event) {
    event.preventDefault();
    if (event.target.value.length < 20) {
      setName(event.target.value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem(name, time);
    setTime(0);
    setName(0);
  }

  return (
    <React.Fragment>
      <div className={styles.gameEndModule}></div>
      <div className={styles.endMenu}>
        <h1>Congrats! You beat the game in {moveCount} move!</h1>
        {time ? (
          <p>
            Your time is: {timeDisplay}
            <form onSubmit={handleSubmit}>
              <label>
                Enter your name:
                <input type="text" value={name} onChange={handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          </p>
        ) : (
          <>
            <p>Your time has been submitted!</p>
            <BackHomeButton />
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default EndGameModal;
