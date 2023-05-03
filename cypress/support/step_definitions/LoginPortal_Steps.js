/// <reference types="cypress" />
import Login_PO from "../page_objects/Login_PO";

import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

const loginpage = new Login_PO;
let stub;

Given ("I navigate to the webdriveruniversity login page"), () => {
    loginpage.navigateTo_Login_Page();
}

When("I type a Username {}", (username) => {
    // cy.get('#text').type(username);
    loginpage.type_Username(username);
})

When("I type a Password {}", (password) => {
    // cy.get('#password').type(password);
    loginpage.type_Password(password);
})

When("I click on the login button", () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    // cy.get('#login-button').click();
    loginpage.clickOn_Login_Button();
})

Then("I should be presented with an alert box which contains text {string}", (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})
