/// <reference types="cypress" />

import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I type a Username {string}", (userName) => {
    cy.get('#text').type(userName);
})