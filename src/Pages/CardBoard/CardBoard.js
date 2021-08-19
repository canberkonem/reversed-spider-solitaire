import React, { useState, useEffect } from "react";
import { initiateGame } from "../../Utils/game";
import CardHolder from "../../Components/CardHolder/CardHolder";
import styles from "./CardBoard.module.css";
import Header from "../../Components/Header/Header";
import CardBoardBottom from "../../Components/CardBoardBottom/CardBoardBottom";

export default function CardBoard() {
  const [game, setGame] = useState({
    decks: [],
    completed: 0,
    moveCount: 0,
  });

  useEffect(() => {
    const init = initiateGame();
    setGame((prevState) => ({
      ...prevState,
      decks: init.decks,
    }));
  }, []);

  return (
    <React.Fragment>
      <Header completed={game.completed} moveCount={game.moveCount} />
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
      <CardBoardBottom
        game={game}
        setGame={setGame}
        stockDecks={game.decks.slice(10)}
      />
    </React.Fragment>
  );
}
