Feature: webdriverUniversity - Login Portal

Scenario: Valid Login Portal submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the Login Portal button
        And I type a Username
        And I type a Password
        And I click on the Login button
        Then I should be presented with a validation succeeded message

        Scenario: Invalid Login Portal submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the Login Portal button
        And I type a Username
        And I type a Password
        And I click on the Login button
        Then I should be presented with a validation failed message