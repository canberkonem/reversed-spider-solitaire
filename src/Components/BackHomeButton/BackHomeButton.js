import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackHomeButton.module.css";

export default function BackHomeButton() {
  return (
    <button className={styles.homeButton}>
      <Link to="/">BACK</Link>
    </button>
  );
}
