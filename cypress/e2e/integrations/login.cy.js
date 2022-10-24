describe("Login test", () => {
  it("validate input and other DOM element", () => {
    cy.visit("/login");
    cy.get("#emailInput")
      .type("jon@doe.com")
      .should("have.value", "jon@doe.com")
      .and("include.value", "@")
      .and("not.have.value", "jon@doe");
    cy.get("#passwordInput").type("Password1234#");
    cy.get("#showIcon").click();
    // cy.get("#btnLogin").click();
  });
});
