/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When("I type a Username {}", (userName) => {
    cy.get('#text').type(userName);
})

When("I type a Password {}", (password) => {
    cy.get('#password').type(password);
})

When("I click on the login button", () => {
    stub = cy.stub();
    cy.on('window:alert', stub);
    cy.get('#login-button').click();
})

Then("I should be presented with an alert box which contains text {string}", (expectedAlertText) => {
    expect(stub).to.have.been.calledWith(expectedAlertText);
})
