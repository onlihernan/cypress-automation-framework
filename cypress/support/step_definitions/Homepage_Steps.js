<<<<<<< HEAD
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com";

Given("I navigate to the webdriveruniversity homepage", () => {
    cy.visit(url);
}) 

// When("I click on the contact us button", () => {
//     cy.get();
// })
=======
/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "http://www.webdriveruniversity.com/";

Given("I navigate to the webdriveruniversity homepage", () => {
    cy.visit(url);
})

When("I click on the contact us button", () => {
    cy.get("#contact-us").invoke("removeAttr", "target").click();
})
>>>>>>> 8e7968c4891483f5e00b561af48b1f0cf2de5fe6
