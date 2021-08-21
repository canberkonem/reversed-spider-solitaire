import React from "react";
import BackHomeButton from "../../Components/BackHomeButton/BackHomeButton";
import HomePageLayout from "../../Components/HomePageLayout/HomePageLayout";
import styles from "./Records.module.css";

function Records() {
  let localData = JSON.parse(localStorage.getItem("score")) || [];
  function compare(a, b) {
    const scoreA = a.time;
    const scoreB = b.time;

    let comparison = 0;
    if (scoreA > scoreB) {
      comparison = 1;
    } else if (scoreA < scoreB) {
      comparison = -1;
    }
    return comparison;
  }

  const dummyData = Array(10).fill("");
  localData = localData.concat(dummyData);
  const sortedData = localData.sort(compare).slice(0, 10);

  return (
    <HomePageLayout>
      <h1>Records</h1>
      <table className={styles.blueTable}>
        <tbody>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Moves</th>
            <th>Time</th>
          </tr>
          {sortedData.map((score, index) => (
            <tr>
              <td className={styles.index}>{index + 1}</td>
              <td className={styles.nameCell}>{score.name}</td>
              <td>{score.move}</td>
              <td>{score.formatTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BackHomeButton />
    </HomePageLayout>
  );
}

export default Records;