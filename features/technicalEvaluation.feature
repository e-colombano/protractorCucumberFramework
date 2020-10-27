Feature: Technical evaluation

  Scenario: Login to demo page
    Given user navigates to login page
    And user completes <email> and <password>
    When user clicks login button
    Then user should be redirected to my-account page
    And user logs out

  Scenario: Make a validation on a behavior or on the existence of some object on the page
    Given user is logged in
    When user searchs for a product
    Then the product should be displayed