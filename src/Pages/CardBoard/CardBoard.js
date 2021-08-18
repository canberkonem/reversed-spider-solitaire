import React, { useState, useEffect } from "react";
import { initiateGame } from "../../Utils/game";
import CardHolder from "../../Components/CardHolder/CardHolder";
import styles from "./CardBoard.module.css";
import Header from "../../Components/Header/Header";

export default function CardBoard() {
  const [game, setGame] = useState({
    decks: [],
  });

  useEffect(() => {
    const init = initiateGame();
    // setCards(init);
    setGame((prevState) => ({
      ...prevState,
      decks: init.decks,
    }));
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className={styles.board}>
        {game.decks.slice(0, 10).map((deck, index) => (
          <CardHolder
            deck={deck}
            game={game}
            deckIndex={index}
            setGame={setGame}
            key={"pile" + index}
          />
        ))}
      </div>
    </React.Fragment>
  );
}
