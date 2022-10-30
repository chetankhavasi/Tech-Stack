@ui
Feature: Technical Task

  Scenario Outline: First scenario
    Given When i am on ESW homepage
    When Click on company link
    And Click on Careers link
    Then Verify the careers page
    And Click on open position link
    And Select location <Location>
    And Select department <Department>
    Then Verify that first position is of Dublin location

    @Dev
    Examples:
      |Location  | Department |
      |Dublin    | Software   |

    @QA
    Examples:
      |Location  | Department |
      |Dublin    | Software   |
