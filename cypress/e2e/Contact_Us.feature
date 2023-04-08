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
<<<<<<< HEAD
>>>>>>> 8e7968c4891483f5e00b561af48b1f0cf2de5fe6
=======

    Scenario: Invalid Contact Us Form Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then I should be presented with a unsuccessful contact us submission message

    Scenario: Valid Contact Us Form Submission - Using specific data
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a specific first name "Sarah"
        And I type a specific last name "Woods"
        And I enter a specific email address "sarah_woods101@mail.com"
        And I type a specific word "hello123" and number 6788 within the comment input field
        And I click on the submit button
        Then I should be presented with a successful contact us submission message
>>>>>>> 00352ecb011b900ead1f1260051f22ae27405ff6
