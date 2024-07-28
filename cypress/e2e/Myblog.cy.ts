describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("Backend", () => {
  it("checks get response", () => {
    const url = "http://localhost:3000";
    cy.request({
      method: "GET",
      url: `${url}/todo`,
    }).then((res) => {
      expect(res.body).to.be.a("array");
    });
  });
});

describe("Frontend", () => {
  it("creates todo", () => {
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