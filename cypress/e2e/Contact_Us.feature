Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
<<<<<<< HEAD
        And I type an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful conact us submission message
=======
        And I enter an email address
        And I type a comment
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
>>>>>>> 8e7968c4891483f5e00b561af48b1f0cf2de5fe6
