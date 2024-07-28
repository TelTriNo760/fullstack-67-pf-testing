
before(() => {
  const url = Cypress.env("BACKEND_URL");
  cy.request({
    method: "POST",
    url: `${url}/todo/all`,
  });
});

describe("Frontend", () => {
  it("connects", () => {
    const url = Cypress.env("FRONTEND_URL");
    cy.visit(url);
  });
  it("creates myblog", () => {
    const url = "http://localhost:1212";
    const text = new Date().getTime().toString();
    cy.visit(url);
    cy.get("[data-cy='popup-button']").click();
    cy.get("[data-cy='title-text']").type(text);
    cy.get("[data-cy='description-text']").type(text);
    cy.get("[data-cy='submit']").click();
    cy.contains(text);
  });
});