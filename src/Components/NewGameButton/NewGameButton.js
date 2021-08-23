import React from "react";
import styles from "./NewGameButton.module.css";

function NewGameButton() {
  return (
    <button className={styles.newGame} onClick={() => window.location.reload()}>
      NEW GAME
    </button>
  );
}

export default NewGameButton;
