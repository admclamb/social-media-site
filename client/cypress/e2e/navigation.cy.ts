describe("Navigation", () => {
  describe("Not logged in", () => {
    it("Should navigate to the create account page", () => {
      cy.visit("/");
      cy.get('a[href*="signup"]').click();
      cy.url().should("include", "signup");
      cy.get("h1").contains("Welcome to Devify Community");
    });

    it("Should navigate to the log in page", () => {
      cy.visit("/");
      cy.get('a[href*="login"]').click();
      cy.url().should("include", "login");
      cy.get("h1").contains("Welcome Back to Devify");
    });
  });
  describe("Logged in", () => {});
});

export {};
