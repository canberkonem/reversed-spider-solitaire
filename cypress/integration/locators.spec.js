/// <reference types="cypress" />

describe("home page navigation", () => {
  it("should display navigation items", () => {
    cy.visit("http://localhost:3000/");
    cy.get("li");
    cy.contains("Start");
    cy.contains("How to Play");
    cy.contains("Records");
    cy.contains("About");
  });
});

describe("About page content", () => {
  beforeEach(() => {
    cy.visit("/about");
  });

  it("should go to about page when clicked", () => {
    cy.contains("About").click();
    cy.url().should("include", "/about");
  });

  it("should have back to home button in about page", () => {
    cy.contains("BACK").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should have imgs that redirect linkedin and github repo.", () => {
    cy.get(
      "a[href='https://github.com/canberkonem/reversed-spider-solitaire']"
    );
    cy.get("a[href='https://www.linkedin.com/in/canberkonem/']");
  });
});

describe("Records page content", () => {
  beforeEach(() => {
    cy.visit("/records");
  });
  it("should have back to home button in about page", () => {
    cy.contains("BACK").click();
    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should have a table that has 11 rows (one row is titles)", () => {
    cy.get("table").find("tr").should("have.length", 11);
  });
  it("should have a table that has 4 coloumns", () => {
    cy.get("td").should("have.length", "40");
  });
});

describe("How to play page content", () => {
  beforeEach(() => {
    cy.visit("/how-to-play");
  });
  it("should have back to home button in about page", () => {
    cy.contains("BACK").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
  it("should have a slider that contains 5 slides", () => {
    cy.get(".slides");
    cy.get(".slider").find("a").should("have.length", "5");
  });
});

describe("Game page content", () => {
  beforeEach(() => {
    cy.visit("/game");
  });
  it("should have new game button", () => {
    cy.contains("NEW GAME");
  });

  it("should have a link to redirect github", () => {
    cy.get(
      "a[href='https://github.com/canberkonem/reversed-spider-solitaire']"
    );
  });
  it("should have score, move, time display", () => {
    cy.get(".Time_Move_display");
  });

  it("should have 10 starting decks", () => {
    cy.get(".cardHolder").should("have.length", "10");
  });
});
