import React from "react";
import Card from "../Card/Card";
import styles from "./CardHolder.module.css";

function CardHolder({ game, setGame, deck, deckIndex }) {
  return (
    <div
      className={`${styles.cardHolder} cardHolder`}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      id={deckIndex}
    >
      {deck.map((card, index) => (
        <Card
          data={card}
          key={card.rank + card.deck + index}
          index={index}
          deckIndex={deckIndex}
          game={game}
          setGame={setGame}
        />
      ))}
    </div>
  );
}

export default CardHolder;
