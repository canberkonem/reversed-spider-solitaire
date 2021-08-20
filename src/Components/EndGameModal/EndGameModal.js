import React, { useState } from "react";
import styles from "./EndGameModal.module.css";
import { formatTime } from "../../Utils/formatTime";
import { Link } from "react-router-dom";

function EndGameModal({ time, moveCount }) {
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
  }

  return (
    <React.Fragment>
      <div className={styles.gameEndModule}></div>
      <section className={styles.endMenu}>
        <h1>Congrats! You beat the game in {moveCount} move!</h1>
        <p>Your time is: {timeDisplay}</p>

        <form onSubmit={handleSubmit}>
          <label>
            Enter your name:
            <input type="text" value={name} onChange={handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </section>
    </React.Fragment>
  );
}

export default EndGameModal;
