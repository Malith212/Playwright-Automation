Feature: Ecommerce Validations

  Scenario: Placing the order
    Given a login to the ecommerce application with "username" and "password"
    When Add "ADIDAS ORIGINAL" to the cart
    Then Verify "ADIDAS ORIGINAL" is displayed in the cart 
    When Enter valid details and place the order
    Then Verify the order is is in the Order History 