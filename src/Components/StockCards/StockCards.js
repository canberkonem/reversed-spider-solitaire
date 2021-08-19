import React, { useState } from "react";
import styles from "./StockCards.module.css";

function StockCards({ index, game, setGame, deck }) {
  const [isShown, setIsShown] = useState(true);

  function handleCardSplit() {
    deck.forEach((card) => {
      card.isDown = false;
    });
    const tempDecks = [...game.decks];
    for (let i = 0; i < 10; i++) {
      tempDecks[i].push(deck[i]);
    }
    tempDecks[10 + index] = [];
    setGame((prevState) => ({
      ...prevState,
      decks: tempDecks,
    }));

    console.log(index, deck, game.decks);
    setIsShown(false);
  }

  return (
    <React.Fragment>
      {isShown && (
        <div
          className={styles.stockDeck}
          style={{ left: `${index * 30}px` }}
          onClick={handleCardSplit}
        ></div>
      )}
    </React.Fragment>
  );
}

export default StockCards;
