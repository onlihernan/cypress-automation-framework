@login-portal @regression
Feature: webdriverUniversity - Login Portal

        # Background: Pre-condition
        #         When I wait for 5 seconds

        Scenario Outline: Validate valid and invalid login credentials
                # Given I navigate to the webdriveruniversity homepage
                # When I click on the Login Portal button
                Given I navigate to the webdriveruniversity login page
                And I type a Username <username>
                And I type a Password <password>
                And I click on the login button
                Then I should be presented with an alert box which contains text '<expectedAlertText>'

                Examples:
                        | username  | password     | expectedAlertText    |
                        | webdriver | webdriver123 | validation succeeded |
                        | webdriver | 12345678     | validation failed    |