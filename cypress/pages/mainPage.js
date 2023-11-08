class MainPage {
  constructor() {
    this.headerNav = "//div[@role='navigation']/div[4]/ul";
    this.financeEsgHeader = "//div[@role='navigation']/div[4]/ul/li[3]/a";
    this.financialControlDropdown =
      "//div/a/span[contains(text(),'Financial Control')]";
    this.closeInformationPopupButton = "//button[@aria-label='Close']";
    this.closeCookiesPopupButton = "//a/span[contains(text(), 'Accept')]";
    this.getInTouchButton =
      "//div[@class='col-inner']/a[contains(@href,'/contact')]";
  }
  closeInformationPopup() {
    cy.xpath(this.closeInformationPopupButton).should("be.visible").click();
    cy.xpath(this.closeInformationPopupButton).should("not.be.visible");
  }
  closeCookiesPopup() {
    cy.xpath(this.closeCookiesPopupButton).should("be.visible").click();
    cy.xpath(this.closeCookiesPopupButton).should("not.be.visible");
  }
  checkIfHeaderBookmarksAreDisplayed(bookmark) {
    cy.xpath(this.headerNav).scrollIntoView();
    cy.contains(bookmark);
  }
  navigateToFinancialControl() {
    cy.xpath(this.financeEsgHeader).trigger("mouseover");
    cy.xpath(this.financeEsgHeader)
      .click()
      .xpath(this.financialControlDropdown)
      .should("be.visible");
    cy.xpath(this.financialControlDropdown).first().click({ force: true });
  }
  clickOnGetInTouchButton() {
    cy.xpath(this.getInTouchButton).should("be.visible").click();
  }
}

export default MainPage;
