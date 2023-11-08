class FinancialControlPage {
  constructor() {
    this.financialControlURL =
      "https://www.sapfioneer.com/finance-esg/financial-control/";
    this.financialControlHeader =
      "//div/div/h3[contains(text(), 'Financial Control')]";
  }

  assertLandingOnFinancialControlPage() {
    cy.url().should("eq", this.financialControlURL);
    cy.xpath(this.financialControlHeader).should("be.visible");
  }
}

export default FinancialControlPage;
