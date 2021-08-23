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

    //Removes default image of dragging
    event.dataTransfer.setDragImage(new Image("0", "0"), -10, -10);
    if (isNotSelectable(currentCard)) {
      currentCard.style.boxShadow = "0px 0px 31px -1px #FF3236";
      setTimeout(() => {
        currentCard.style.boxShadow = null;
      }, 700);
      return;
    }

    //gets all selected cards array
    selectedCards.push(currentCard);
    let siblingCard = currentCard.nextElementSibling;
    while (siblingCard) {
      selectedCards.push(siblingCard);
      siblingCard = siblingCard.nextElementSibling;
    }
    //Starting point coordinates for reference.
    mouseX = event.pageX;
    mouseY = event.pageY;
  }

  function drag(event) {
    let diffX = event.pageX - mouseX;
    let diffY = event.pageY - mouseY;
    selectedCards.forEach((card) => {
      card.style.zIndex = "999";
      card.style.transform = `translate(${diffX}px,${diffY}px)`;
      card.style.boxShadow = "  0px 0px 15px -1px #32ff00";
    });
  }

  function dragEnd(event) {
    if (!selectedCards.length > 0) return;
    selectedCards.forEach((card) => {
      card.style.zIndex = null;
      card.style.transform = `translate(0px,0px)`;
      card.style.boxShadow = null;
    });

    //save end coords to select element dropped on
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
