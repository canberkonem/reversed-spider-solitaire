import React from "react";
import styles from "./CardBoardBottom.module.css";
import StockCards from "../StockCards/StockCards";

function CardBoardBottom({ game, setGame, stockDecks }) {
  return (
    <div className={styles.bottomCardBoard}>
      {stockDecks.map((stockDeck, index) => (
        <StockCards
          key={index}
          game={game}
          setGame={setGame}
          deck={stockDeck}
          index={index}
        />
      ))}
    </div>
  );
}

export default CardBoardBottom;
