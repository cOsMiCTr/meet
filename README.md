
## FEATURE 2

AS A USER,

I SHOULD BE ABLE TO CLICK ON AN EVENT TO EXPAND IT AND COLLAPSE IT 
AGAIN

SO THAT I CAN SEE THE DETAILS OF THE EVENT WHENEVER I CLICK ON IT
AND HIDE IT WHENEVER I AM DONE WITH IT

- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

        Given user hasn’t searched for any city
        When the user opens the app
        Then the user should see the list of upcoming events.


- Scenario 2: User should see a list of suggestions when they search for a city
        
        Given the main page is open
        When the user starts typing in the city textbox
        Then the user should receive a list of cities (suggestions) that match what they’ve typed

- Scenario 3: User can select a city from the suggested list
        
        Given user was typing “Berlin” in the city textbox
        And the list of suggested cities is showing
        When the user selects a city (e.g., “Berlin, Germany”) from the list
        Then their city should be changed to that city (i.e., “Berlin, Germany”)
        And the user should receive a list of upcoming events in that city

## FEATURE 3

AS A USER,

I SHOULD BE ABLE TO CHANGE THE NUMBER OF EVENTS SHOWN MANUALLY 

SO THAT I CAN SPECIFY THE NUMBER OF EVENTS SHOWN

- Scenario 1: When user hasn’t specified a number, 15 is the default number

        Given a user has not specified a number for shown events
        When nothing has changed
        Then the number of events default number is 15

- Scenario 2: User can change the number of events they want to see

        Given the user is on the main page
        When the user set a number of events he or she wants to see in the “Number of events” box
        Then this number of events will be displayed

## FEATURE 4

AS A USER

I  SHOULD BE ABLE TO REACH THE DATA

SO THAT I CAN USE THE APP WHEN OFFLINE

- Scenario 1: Show cached data when there’s no internet connection

        Given a user does not have an internet connection
        When a data needs to be shown
        Then the app shows data from cache

- Scenario 2: Show error when user changes the settings (city, time range)

        Given a user wants to change the settings (city, time range)
        When a change is made
        Then the app should show error


## FEATURE 5

AS A USER

I  SHOULD BE ABLE TO SEE THE DATA

SO THAT I CAN VISUALIZE THE DATA

- Scenario 1: Show a chart with the number of upcoming events in each city

         Given a user wants to see the upcoming events
         When the user is on the main page
         Then the upcoming events should be shown as a chart in each city
