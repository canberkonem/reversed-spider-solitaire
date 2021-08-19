import _ from "lodash";

const cardInfo = {
  rank: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  value: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
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
    cards: shuffledCards,
  };
};

export const getRank = (rank) => {
  if (rank === "K" || rank === "Q" || rank === "J" || rank === "A") {
    switch (rank) {
      case "K":
        return 13;
      case "Q":
        return 12;
      case "J":
        return 11;
      case "A":
        return 1;
    }
  } else {
    return parseInt(rank);
  }
};
