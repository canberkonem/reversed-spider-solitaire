import { getRank, isNotSelectable } from "./game";

describe("Getting rank function case tests", () => {
  it("should return 13 as a rank if card is K", () => {
    const cardRank = "K";
    expect(getRank(cardRank)).toBe(13);
  });
  it("should return 12 as a rank if card is Q", () => {
    const cardRank = "Q";
    expect(getRank(cardRank)).toBe(12);
  });

  it("should return 11 as a rank if card is J", () => {
    const cardRank = "J";
    expect(getRank(cardRank)).toBe(11);
  });

  it("should return 1 as a rank if card is A", () => {
    const cardRank = "A";
    expect(getRank(cardRank)).toBe(1);
  });

  it("should return 2 as a rank if card is 2", () => {
    const cardRank = "2";
    expect(getRank(cardRank)).toBe(2);
  });

  it("should return 6 as a rank if card is 6", () => {
    const cardRank = "6";
    expect(getRank(cardRank)).toBe(6);
  });
});

describe("isNotSelectable function case tests", () => {
  it("should return true if the card is down", () => {
    document.body.innerHTML = `<div draggable="true" id="testCard" data-rank="5" id="1" data-isdown="true" class="card" index="4" style="top: 120px; background-image: url(&quot;/static/media/cardBack.93f644a7.png&quot;);"></div>`;

    const testCard = document.getElementById("testCard");

    expect(isNotSelectable(testCard)).toBe(true);
  });

  it("should return true if the card open but it is not in series with following card", () => {
    document.body.innerHTML = `<div draggable="true" id="testCard" data-rank="5" id="1" data-isdown="true" class="card" index="4" style="top: 120px; background-image: url(&quot;/static/media/cardBack.93f644a7.png&quot;);"></div>
    <div draggable="true" id="testCard" data-rank="3" id="1" data-isdown="true" class="card" index="5" style="top: 150px; background-image: url(&quot;/static/media/cardBack.93f644a7.png&quot;);"></div>
    `;

    const testCard = document.getElementById("testCard");
    expect(isNotSelectable(testCard)).toBe(true);
  });
});
