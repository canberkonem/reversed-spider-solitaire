import React, { useState } from "react";
import styles from "./EndGameModal.module.css";
import { formatTime } from "../../Utils/formatTime";
import BackHomeButton from "../BackHomeButton/BackHomeButton";
function EndGameModal({ time, moveCount, setTime }) {
  const [name, setName] = useState("");
  const timeDisplay = formatTime(time);

  function handleChange(event) {
    event.preventDefault();
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (name.length > 0) {
      let localData = [];
      const gameEndData = {
        name: name,
        time: time,
        move: moveCount,
        formatTime: formatTime(time),
      };
      localData = JSON.parse(localStorage.getItem("score")) || [];
      localData.push(gameEndData);
      const updatedLocalData = JSON.stringify(localData);
      localStorage.setItem("score", updatedLocalData);
      setTime(0);
      setName("");
    } else {
      alert("Please enter a valid name.");
    }
  }

  return (
    <React.Fragment>
      <div className={styles.gameEndModule}></div>
      <div className={styles.endMenu}>
        <h1>Congratulations!</h1>
        <h2>
          You beat the game in 
          <span className={styles.resultDisplay}>{moveCount}</span> moves!
        </h2>
        {time ? (
          <section className={styles.enterScoreSection}>
            Your time is:{" "}
            <span className={styles.resultDisplay}>{timeDisplay}</span>
            <form onSubmit={handleSubmit}>
              <br />
              <label>
                Enter your name: <br />
                <input type="text" value={name} onChange={handleChange} />
              </label>
              <input type="submit" value="SUBMIT" />
            </form>
          </section>
        ) : (
          <>
            <p>Your score has been submitted!</p>
            <BackHomeButton />
          </>
        )}
      </div>
    </React.Fragment>
  );
}

export default EndGameModal;
