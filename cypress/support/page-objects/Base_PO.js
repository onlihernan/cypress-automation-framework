/// <reference types="cypress" />

class Base_PO {
    baseUrl = "https://www.webdriveruniversity.com/";

    navigate(path) {                            //navigate is common logic (method)
        // cy.visit(baseUrl + path); ///path is the extension of the url i.e. "/Contact-Us/contactus.html"
        cy.fixture("config.json").then((data) => { //goes to an specific folder
            cy.visit(data.baseUrl + path)      //brings specific data from folder
        })
    }

    getPageTitle() {
        return cy.title();
    }
    //this method returns us to the main page
}
export default Base_PO;