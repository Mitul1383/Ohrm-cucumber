$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/orangehrm/resources/featurefile/adminpage.feature");
formatter.feature({
  "line": 1,
  "name": "Navigate to AdminPage elements",
  "description": "As a user\r\nI want to visit Orange Hrm website",
  "id": "navigate-to-adminpage-elements",
  "keyword": "Feature"
});
formatter.before({
  "duration": 22695456200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should navigate to AdminPage elements",
  "description": "",
  "id": "navigate-to-adminpage-elements;verify-user-should-navigate-to-adminpage-elements",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on Admin Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see Add User button",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 14447961200,
  "status": "passed"
});
formatter.match({
  "location": "AdminPageTest.clickOnAdminButton()"
});
formatter.result({
  "duration": 1425140200,
  "status": "passed"
});
formatter.match({
  "location": "AdminPageTest.clickOnAddButton()"
});
formatter.result({
  "duration": 10699192800,
  "status": "passed"
});
formatter.match({
  "location": "AdminPageTest.iShouldSeeAddUserButton()"
});
formatter.result({
  "duration": 155680300,
  "status": "passed"
});
formatter.after({
  "duration": 232100,
  "status": "passed"
});
formatter.before({
  "duration": 13086052000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should navigate to MarketPlace element",
  "description": "",
  "id": "navigate-to-adminpage-elements;verify-user-should-navigate-to-marketplace-element",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on Admin page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "click on MarketPlace Button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see OrangeHRM Addons on page",
  "keyword": "Then "
});
formatter.match({
  "location": "AdminPageTest.iAmOnAdminPage()"
});
formatter.result({
  "duration": 13288826800,
  "status": "passed"
});
formatter.match({
  "location": "AdminPageTest.clickOnMarketPlaceButton()"
});
formatter.result({
  "duration": 2294290200,
  "status": "passed"
});
formatter.match({
  "location": "AdminPageTest.iShouldSeeOrangeHRMAddonsOnPage()"
});
formatter.result({
  "duration": 20135636500,
  "status": "passed"
});
formatter.after({
  "duration": 45400,
  "status": "passed"
});
formatter.uri("src/test/java/com/orangehrm/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a User\r\nI want to visit Orange Hrm website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14106479800,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user should login with valid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should login successfully on Orange Hrm website",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 226800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 211956200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 231925900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginButton()"
});
formatter.result({
  "duration": 12975647100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.iShouldLoginSuccessfullyOnOrangeHrmWebsite()"
});
formatter.result({
  "duration": 105456900,
  "status": "passed"
});
formatter.after({
  "duration": 43100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 19,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "patel",
        "Pattel1",
        "Invalid credentials"
      ],
      "line": 20,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "patel123",
        "Patel345",
        "Invalid credentials"
      ],
      "line": 21,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "prem",
        "prem0609",
        "Invalid credentials"
      ],
      "line": 22,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "megh",
        "megh1709",
        "Invalid credentials"
      ],
      "line": 23,
      "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14876878500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"patel\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"Pattel1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 295124700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pattel1",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 218145400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 1027518700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 98163900,
  "status": "passed"
});
formatter.after({
  "duration": 37800,
  "status": "passed"
});
formatter.before({
  "duration": 18013835300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"patel123\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"Patel345\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 54400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel123",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 270030400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel345",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 599194500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 1552360800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 79296000,
  "status": "passed"
});
formatter.after({
  "duration": 41600,
  "status": "passed"
});
formatter.before({
  "duration": 18834570000,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"prem\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"prem0609\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 45100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prem",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 191927900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prem0609",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 223852100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 1136649300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 101779100,
  "status": "passed"
});
formatter.after({
  "duration": 54600,
  "status": "passed"
});
formatter.before({
  "duration": 15993020300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify user should not login with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter username \"megh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"megh1709\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on Login Btn",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see error message \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "megh",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterUsername(String)"
});
formatter.result({
  "duration": 259988700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "megh1709",
      "offset": 18
    }
  ],
  "location": "LoginTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 208288300,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.clickOnLoginBtn()"
});
formatter.result({
  "duration": 1746204200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 28
    }
  ],
  "location": "LoginTest.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "duration": 94184700,
  "status": "passed"
});
formatter.after({
  "duration": 41500,
  "status": "passed"
});
});