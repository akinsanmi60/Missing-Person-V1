describe("Register test", () => {
  it("validate input and other DOM element", () => {
    cy.visit("/register");
    cy.get("#firstname")
      .type("Akinsanmi")
      .should("not.have.value", "jon@doe.com");
    cy.get("#lastname")
      .type("Akintunde")
      .should("not.have.value", "jon@doe.com");
    cy.get("#email")
      .type("jon@doe.com")
      .should("have.value", "jon@doe.com")
      .and("include.value", "@")
      .and("not.have.value", "jon@doe");
    cy.get("#password").type("Password1234#");
    cy.get("#Cpassword").type("Password1234#");
    cy.get("#tel")
      .type("+2348133161819")
      .should("not.have.value", "jon@doe.com");
    cy.get("#showIcon").click();
    cy.get("#showIconB").click();
    // cy.get("#btnLogin").click();
  });
});
