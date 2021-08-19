import React from "react";
import { Link } from "react-router-dom";
import HomePageLayout from "../../Components/HomePageLayout/HomePageLayout";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <HomePageLayout>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/game">Start</Link>
        </li>
        <li>
          <Link to="/how-to-play">How to Play</Link>
        </li>
        <li>
          <Link to="/about">Records</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </HomePageLayout>
  );
}
