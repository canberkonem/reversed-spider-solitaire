import _ from "lodash";

// Cards general data
const cardInfo = {
  rank: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
};

// Function to generate card decks
export const initiateGame = () => {
  let cards = [],
    decks;
  cardInfo["rank"].forEach((rank) => {
    for (let i = 1; i <= 8; i++) {
      cards.push({
        rank: rank,
        isDown: true,
      });
    }
  });
  let shuffledCards = _.shuffle(cards);
  const firstPile = _.chunk(shuffledCards.slice(0, 24), 6);
  const secondPile = _.chunk(shuffledCards.slice(24, 54), 5);
  const stockCardsPile = _.chunk(shuffledCards.slice(54), 10);
  decks = [...firstPile, ...secondPile, ...stockCardsPile];
  for (let i = 0; i <= 9; i++) {
    decks[i][decks[i].length - 1].isDown = false;
  }
  return {
    decks: decks,
  };
};

//Get number equivalent of rank

export const getRank = (rank) => {
  switch (rank) {
    case "K":
      return 13;
    case "Q":
      return 12;
    case "J":
      return 11;
    case "A":
      return 1;
    default:
      return parseInt(rank);
  }
};

//Checks the decks in the state if there is a row that has only closed cards or not

export function checkFaceUp(decks) {
  for (let i = 0; i < decks.length; i++) {
    if (decks[i].length && decks[i].every((card) => card.isDown)) {
      const deckWithAllCloseCards = decks[i];
      deckWithAllCloseCards[deckWithAllCloseCards.length - 1].isDown = false;
    }
  }
}

//Gets the "element.target" and checks if it is selectable or not by controlling data that has

export function isNotSelectable(currentCard) {
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

//Checks "(start)even.target" and "(end)event.target" to decide if the movement valid or not

export function isValidMove(selectedCard, targetElement) {
  const selectedCardRank = parseInt(selectedCard.getAttribute("data-rank"));
  const targetElementRank = parseInt(targetElement.getAttribute("data-rank"));
  const targetElementSibling = targetElement.nextElementSibling;

  if (
    (!targetElementSibling &&
      selectedCardRank === targetElementRank + 1 &&
      targetElement.classList.contains("card")) ||
    targetElement.classList.contains("cardHolder")
  ) {
    return true;
  }

  // It adds red shadows for 700ms, if the move is not valid
  if (
    targetElement.getAttribute("data-isdown") === "false" &&
    targetElement.id !== selectedCard.id
  ) {
    selectedCard.style.boxShadow = "0px 0px 31px -1px #FF3236";
    setTimeout(() => {
      selectedCard.style.boxShadow = null;
    }, 700);
    targetElement.style.boxShadow = "0px 0px 31px -1px #FF3236";
    setTimeout(() => {
      targetElement.style.boxShadow = null;
    }, 700);
  }
}

//After each valid move checks the column card dropped to see if the series completed or not.

export function checkCompleted(decks, onDropDeckId, getRank, setGame) {
  const onDropDeck = decks[onDropDeckId];
  const onDropDeckFiltered = onDropDeck.filter((card) => !card.isDown);
  const filteredDeckRanks = onDropDeckFiltered.map((card) =>
    getRank(card.rank)
  );
  if (
    onDropDeckFiltered.length >= 13 &&
    onDropDeckFiltered[onDropDeckFiltered.length - 1].rank === "K"
  ) {
    const cardsInSeries = [];
    const lastCardIndex = onDropDeckFiltered.length - 1;
    for (let i = lastCardIndex; i > lastCardIndex - 12; i--) {
      if (filteredDeckRanks[i] - 1 === filteredDeckRanks[i - 1]) {
        cardsInSeries.push(onDropDeckFiltered[i - 1]);
      }
    }

    if (cardsInSeries.length === 12) {
      decks[onDropDeckId].splice(onDropDeck.length - 13);
      setGame((prevState) => ({
        ...prevState,
        completed: prevState.completed + 1,
      }));
    }
  }
}
