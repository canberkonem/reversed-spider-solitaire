import React from "react";
import { Link } from "react-router-dom";
import HomePageLayout from "../../Components/HomePageLayout/HomePageLayout";
import styles from "./Home.module.css";
import { GAME, HOWTOPLAY, RECORDS, ABOUT } from "../../Utils/routes";

export default function Home() {
  return (
    <HomePageLayout>
      <ul className={styles.navLinks}>
        <li>
          <Link to={GAME}>Start</Link>
        </li>
        <li>
          <Link to={HOWTOPLAY}>How to Play</Link>
        </li>
        <li>
          <Link to={RECORDS}>Records</Link>
        </li>
        <li>
          <Link to={ABOUT}>About</Link>
        </li>
      </ul>
    </HomePageLayout>
  );
}
