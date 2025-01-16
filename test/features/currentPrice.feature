Feature: Test Currentprice API

  Scenario Outline: Verify the Currentprice API response contents
    
    Given I make Get <EndPoint> api call
    Then I validate the response contents
    And I validate the response GBP having description <Description>

    Examples:
    |EndPoint                 |Description|
    |/v1/bpi/currentprice.json|British Pound Sterling|
