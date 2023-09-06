@deleteproduct
Feature: delete product

  @del001
  Scenario: user success delete product
    Given user success login
    When user click humburger icon
    And user select product
    And user click button delete
		Then user success delete product