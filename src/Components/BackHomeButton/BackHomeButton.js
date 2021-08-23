import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackHomeButton.module.css";
import { HOME } from "../../Utils/routes";

export default function BackHomeButton() {
  return (
    <button className={styles.homeButton}>
      <Link to={HOME}>BACK</Link>
    </button>
  );
}
