const expectedErrorMessages = require("../fixtures/expectedErrorMessages");

class ContactPage {
  constructor() {
    this.contactPageURL = "https://www.sapfioneer.com/contact/";
    this.contactPageHeader = "//div/div/h3[contains(text(), 'Get in touch')]";
    this.submitFormButton = "//input[@type='submit']";
    this.iframeSelector = "label.hs-error-msg.hs-main-font-element";
    this.errorRollup = "//div[@class='hs_error_rollup']/ul/li/label";
  }

  assertLandingOnContactPage() {
    cy.url().should("eq", this.contactPageURL);
    cy.xpath(this.contactPageHeader).should("be.visible");
  }
  clickOnSubmitFormButton() {
    cy.scrollTo(0, 800);
    cy.getIframe().xpath(this.submitFormButton).click();
  }
  assertErrorMessagesOnEmptyForm() {
    cy.getIframe()
      .find(this.iframeSelector)
      .each(($element, i) => {
        cy.wrap($element).should("have.text", expectedErrorMessages[i]);
      });
    cy.getIframe()
      .xpath(this.errorRollup)
      .should("have.text", "Please complete all required fields.");
  }
}

export default ContactPage;
