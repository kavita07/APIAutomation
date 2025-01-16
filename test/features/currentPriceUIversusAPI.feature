Feature: Test Currentprice API

  Scenario Outline: Verify the response UAS GBP EUR & GBP
    Given I am on the <PageUrl>
    When I perform <EndPoint> search
    And I make Get <EndPoint> api call
    Then I validate the UI response versus API response
    And I validate the response GBP having description <Description>

    Examples:
    |PageUrl                  |EndPoint                 |Description|
    |https://resttesttest.com/|/v1/bpi/currentprice.json|British Pound Sterling|
