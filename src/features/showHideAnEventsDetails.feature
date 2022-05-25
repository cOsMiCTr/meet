Feature: Show/hide event details.

Scenario: An event element is collapsed by default.
Given the user is on the main page of the app
When an event is displayed
Then the event details will be collapsed.

Scenario: User can expand an event to see its details
Given the user is displayed with a list of events
When the user clicks on an individual event
Then the event details will be displayed

Scenario: User can collapse an event to hide its details
Given The user has clicked on an event to display details
When the user clicks on “close” button
Then the event details will hide
