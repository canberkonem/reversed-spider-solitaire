import React from "react";
import BackHomeButton from "../../Components/BackHomeButton/BackHomeButton";
import HomePageLayout from "../../Components/HomePageLayout/HomePageLayout";
import styles from "./About.module.css";
import github from "../../Assets/contacts/github.png";
import linkedin from "../../Assets/contacts/linkedin.png";

export default function About() {
  return (
    <HomePageLayout>
      <h1>About</h1>
      <div className={styles.aboutDescription}>
        <p>
          This project is a capstone project for Trendyol Front End Bootcamp
          which is organised with the partnership of Kodluyoruz.
        </p>
        <br />
        <p>It is made by Canberk Önem.</p>
        <p>You can contact me by following links!</p>
        <a
          href="https://github.com/canberkonem/reversed-spider-solitaire"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/canberkonem/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
      </div>
      <BackHomeButton />
    </HomePageLayout>
  );
}
