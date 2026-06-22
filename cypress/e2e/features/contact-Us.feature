Feature: Contact Us Form


  Background:
    Given visit to the web
    And User is on the home page

  Scenario: Verify user can submit Contact Us form successfully
    # Given User is on the home page
    When User clicks on Contact Us button
    Then GET IN TOUCH section should be displayed
    When Enter name email subject and message
    Then Upload file
    And Click Submit button
    Then Verify success message is visible
    When Click Home button
    Then Verify user landed on home page successfully