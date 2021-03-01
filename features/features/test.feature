Feature: Experimental test
   It is a test feature to validate cucumber reporting is working as expected

   Scenario: Navigate to SWAG Labs
      Given I navigate to SWAG Labs
      And I enter username "standard_user" and pasword "secret_sauce"
      When I click login button
      Then I successfuly login into system
      And I take a screenshot
      And I check there is no console errors
