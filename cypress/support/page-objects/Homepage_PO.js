/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO {
  navigateToHomepage() {
    super.navigate(""); //super uses methods contained in Base_PO cause the extends
  }

  clickOn_ContactUs_Button() {
    cy.clickAndOpenLink_InSameTab("#contact-us");
  }
  clickOn_LoginPortal_Button() {
    cy.clickAndOpenLink_InSameTab("#login-portal");
  }
}
export default Homepage_PO;
