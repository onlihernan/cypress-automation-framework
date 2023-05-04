/// <reference types="cypress" />
import { Before, Given, When } from "@badeball/cypress-cucumber-preprocessor";
// import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

// const url = "https://www.webdriveruniversity.com/";

// const basePage = new Base_PO(); replaced with homePage
const homePage = new Homepage_PO();

Before(() =>{
    cy.log("Executing commands inside Homepage Steps");
})

Given("I navigate to the webdriveruniversity homepage", () => {
    // cy.visit(url);
    // basePage.navigate(""); //"" indicates it'll take the path included in "navigate" method used in /Base_PO.js
    homePage.navigate("");
})

When("I click on the contact us button", () => {
    // cy.get("#contact-us").invoke("removeAttr", "target").click();
    // cy.clickAndOpenLink_InSameTab("#contact-us");
    homePage.clickOn_ContactUs_Button();
})

When("I click on the Login Portal button", () => {
    // cy.get("#login-portal").invoke("removeAttr", "target").click();
    // cy.clickAndOpenLink_InSameTab("#login-portal");
    homePage.clickOn_Login_Button();
})
