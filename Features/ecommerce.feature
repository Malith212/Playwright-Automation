Feature: Ecommerce Validations

  Scenario: Placing the order
    Given A login to the ecommerce application with "navindumalith0@gmail.com" and "Mn20010810@#"
    When Add "ADIDAS ORIGINAL" to the cart
    Then I should see "ADIDAS ORIGINAL" in the cart
    When Enter valid details and place the order
    Then Verify the order is is in the Order History
