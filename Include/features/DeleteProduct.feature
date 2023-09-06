@deleteproduct
Feature: delete product

  @del001
  Scenario: user success delete product
    Given user ready login
    When user click icon humburger
    And user choose product
    And user click button delete
		Then user success delete product