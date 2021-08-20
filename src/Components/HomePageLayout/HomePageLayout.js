import React from "react";
import styles from "./HomePageLayout.module.css";

export default function HomePageLayout(props) {
  return (
    <React.Fragment>
      <div className={styles.pageLayout}>
        <h1 className={styles.mainHeader}>Reversed Spider Solitaire</h1>
        <div className={styles.middleBox}>{props.children}</div>
      </div>
    </React.Fragment>
  );
}
