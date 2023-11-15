describe("test apod consultation", () => {
  beforeEach(() => {
    cy.intercept('GET', "https://api.nasa.gov/planetary/apod*", {fixture: "apod-list.json"})
    cy.visit("/");
  })

  it("should load at least one apod cards", () => {
    cy.get("a").should("have.length.gt",0);
  });

  it("should have clickable cards who redirect to card's url", () => {
    cy.get("a:first").click();
    cy.url().should('include','/apod/2023-11-11');
  });

  it("should have return button to see all cards in card details", () => {
    cy.get("a:first").click();
    cy.get("button").click();
    cy.url().should('include','/');
    cy.get("a").should("have.length.gt",0);
  });
})