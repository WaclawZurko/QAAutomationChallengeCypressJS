import MainPage from "../pages/MainPage";
import FinancialControlPage from "../pages/financialControlPage";
import ContactPage from "../pages/ContactPage";

const bookmarksTestData = require("../fixtures/bookmarks.json");

describe("Challenge tasks. All 3 tasks are below", () => {
  const mainPage = new MainPage();
  const financialControlPage = new FinancialControlPage();
  const contactPage = new ContactPage();

  beforeEach(() => {
    cy.visit("");
    mainPage.closeCookiesPopup();
  });

  bookmarksTestData.forEach((bookmark) => {
    it(`Check if ${bookmark} is displayed on the main page`, () => {
      mainPage.checkIfHeaderBookmarksAreDisplayed(bookmark);
    });
  });

  it("Navigate to Financial Control via dropdown", () => {
    mainPage.navigateToFinancialControl();
    financialControlPage.assertLandingOnFinancialControlPage();
  });

  it("Validate error messages on contact form", () => {
    mainPage.clickOnGetInTouchButton();
    contactPage.assertLandingOnContactPage();
    contactPage.clickOnSubmitFormButton();
    contactPage.assertErrorMessagesOnEmptyForm();
  });
});
