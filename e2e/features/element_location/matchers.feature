Feature: Element matchers
    Elements can be located using the various matchers supported by Detox

    @matchers @text
    Scenario: I can locate elements by text
    Given I tap on the Counters section by text
    When I tap on the Water counter by text
    When I tap on the Electricity section by text
    When I tap on the Gas counter section by text
    When I tap on the Broadband counter section by text

     @matchers @id
    Scenario: I can locate elements by ID
    Given I tap on Counters by ID
    When I tap on the Water Counter by ID
    When I tap on the Electricity Counter by ID
    When I tap on the Gas Counter by ID
    When I tap on the Broadband Counter by ID