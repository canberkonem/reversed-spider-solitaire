import React from "react";
import {
  getRank,
  checkFaceUp,
  isValidMove,
  isNotSelectable,
  checkCompleted,
} from "../../Utils/game";
import "./Card.css";

function Card({ data, index, game, setGame, deckIndex }) {
  var mouseX;
  var mouseY;
  let selectedCards = [];

  function dragStart(event) {
    const currentCard = event.target;
    event.dataTransfer.setDragImage(new Image("0", "0"), -10, -10);
    if (isNotSelectable(currentCard)) {
      return;
    }

    selectedCards.push(currentCard);
    let siblingCard = currentCard.nextElementSibling;
    while (siblingCard) {
      selectedCards.push(siblingCard);
      siblingCard = siblingCard.nextElementSibling;
    }
    mouseX = event.pageX;
    mouseY = event.pageY;
  }

  function drag(event) {
    let diffX = event.pageX - mouseX;
    let diffY = event.pageY - mouseY;
    selectedCards.forEach((card) => {
      card.style.zIndex = "999";
      card.style.transform = `translate(${diffX}px,${diffY}px)`;
    });
  }

  function dragEnd(event) {
    if (!selectedCards.length > 0) return;
    selectedCards.forEach((card) => {
      card.style.zIndex = null;
      card.style.transform = `translate(0px,0px)`;
    });
    const xEndPoint = event.pageX;
    const yEndPoint = event.pageY;
    const element = document.elementFromPoint(xEndPoint, yEndPoint)
      ? document.elementFromPoint(xEndPoint, yEndPoint)
      : document.getElementById("root");

    if (isValidMove(selectedCards[0], element)) {
      const tempDecks = [...game.decks];
      const selectedCardsStartingIndex = parseInt(
        selectedCards[0].getAttribute("index")
      );
      const transferCard = tempDecks[selectedCards[0].id].splice(
        selectedCardsStartingIndex
      );
      tempDecks[element.id].push(...transferCard);
      checkCompleted(tempDecks, element.id, getRank, setGame);
      checkFaceUp(tempDecks);

      setGame((prevState) => ({
        ...prevState,
        decks: tempDecks,
        moveCount: prevState.moveCount + 1,
      }));
    }
    selectedCards = [];
  }

  const imgRank = data.rank;
  const cardImage = data.isDown
    ? require(`../../Assets/cardImg/cardBack.png`).default
    : require(`../../Assets/cardImg/${imgRank}.png`).default;

  return (
    <div
      draggable="true"
      data-rank={getRank(data.rank)}
      onDragStart={dragStart}
      onDrag={drag}
      onDragEnd={dragEnd}
      id={deckIndex}
      data-isdown={data.isDown}
      className="card"
      index={index}
      style={{ top: `${index * 30}px`, backgroundImage: `url(${cardImage})` }}
    ></div>
  );
}

export default Card;
