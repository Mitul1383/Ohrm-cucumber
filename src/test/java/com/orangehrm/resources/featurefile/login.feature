Feature: Login Functionality
  As a User
  I want to visit Orange Hrm website

  Scenario: Verify user should login with valid credentials
    Given I am on home page
    When I enter username "Admin"
    And  I enter password "admin123"
    And  Click on Login button
    Then I should login successfully on Orange Hrm website

  Scenario Outline: Verify user should not login with invalid credentials
    Given I am on home page
    When I enter username "<username>"
    And I enter password "<password>"
    And click on Login Btn
    Then I should see error message "<errorMessage>"
    Examples:
      | username | password   | errorMessage        |
      | patel    | Pattel1    | Invalid credentials |
      | patel123 | Patel345   | Invalid credentials |
      | prem     | prem0609   | Invalid credentials |
      | megh     | megh1709   | Invalid credentials |
