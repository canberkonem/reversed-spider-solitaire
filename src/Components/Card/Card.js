import React from "react";
import { getRank } from "../../Utils/game";
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

    if (
      (parseInt(selectedCards[0].getAttribute("data-rank")) ===
        parseInt(element.getAttribute("data-rank")) + 1 &&
        element.classList.contains("card")) ||
      element.classList.contains("cardHolder")
    ) {
      const tempDecks = [...game.decks];
      const selectedCardsStartingIndex = parseInt(
        selectedCards[0].getAttribute("index")
      );
      const transferCard = tempDecks[selectedCards[0].id].splice(
        selectedCardsStartingIndex
      );
      tempDecks[element.id].push(...transferCard);
      checkFaceUp(tempDecks);

      setGame((prevState) => ({
        ...prevState,
        decks: tempDecks,
      }));
    }
    selectedCards = [];
  }

  function checkFaceUp(decks) {
    for (let i = 0; i < decks.length; i++) {
      if (decks[i].length && decks[i].every((card) => card.isDown)) {
        const deckWithAllCloseCards = decks[i];
        deckWithAllCloseCards[deckWithAllCloseCards.length - 1].isDown = false;
      }
    }
  }

  function checkCompleted() {}

  function isNotSelectable(currentCard) {
    if (currentCard.getAttribute("data-isdown") === "true") {
      return true;
    }
    const selectedCardsRanks = [];
    selectedCardsRanks.push(parseInt(currentCard.getAttribute("data-rank")));
    let siblingCard = currentCard.nextElementSibling;
    while (siblingCard) {
      selectedCardsRanks.push(parseInt(siblingCard.getAttribute("data-rank")));
      siblingCard = siblingCard.nextElementSibling;
    }
    for (let i = 0; i < selectedCardsRanks.length - 1; i++) {
      if (selectedCardsRanks[i] !== selectedCardsRanks[i + 1] - 1) return true;
    }
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
