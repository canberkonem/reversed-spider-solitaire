import React from "react";
import styles from "./Header.module.css";

function Header({ completed, moveCount }) {
  return (
    <div className={styles.header}>
      <span>
        Completed: {completed} Move:{moveCount}
      </span>
    </div>
  );
}

export default Header;
