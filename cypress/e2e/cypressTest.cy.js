describe("Hero Component", () => {
  beforeEach(() => {
    //her koşuldan önce sayfayı başlatır
    cy.visit("http://localhost:5173/");
  });
  //tema değiştirme
  it("theme", () => {
    cy.get('[data-cy="theme"]').should("exist");
    cy.get('[data-cy="theme-button"]').click({ force: true });
    cy.get('[data-cy="theme"]').should("have.class", "dark:bg-[#2A262B]");

    cy.get('[data-cy="theme-button"]').click({ force: true });
    cy.get('[data-cy="theme"]').should("have.class", "bg-gray-100");
  });

  //dil değiştirme
  it("should switch language from English to Turkish", () => {
    cy.get('[data-cy="english"]').should("exist");
    cy.get('[data-cy="english-button"]').click({ force: true });
    cy.get('[data-cy="turkish"]').should("exist");
    cy.get('[data-cy="turkish-button"]').click({ force: true });
    cy.get('[data-cy="english-button"]').click({ force: true });
  });
  // linkleri kontrol et
  it("should display social links linked", () => {
    cy.get("a[href*='linkedin']").should("exist");
    cy.get("a[href*='github']").should("exist");
    cy.get("a[href^='mailto:']").should("exist");
  });
  //sayfanın en altına in butona tıklayıp yukarı çık
  it("when scroll to the bottom of page and click to the to-up-button should be go top of page", () => {
    cy.scrollTo("bottom");
    cy.get('[data-cy="top-button"]').should("be.visible");
    cy.get('[data-cy="top-button"]').click({ force: true });
    cy.window().its("scrollY").should("equal", 0);
  });
});
