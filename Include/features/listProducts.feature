@listAllProducts
Feature: List All Products

  @listAllProduct1
  Scenario: User View List All Products
    Given User Already Login
    When User Click hamburger icon
    Then User find products
