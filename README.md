
## FEATURE 2

AS A USER,

I SHOULD BE ABLE TO CLICK ON AN EVENT TO EXPAND IT AND COLLAPSE IT 
AGAIN

SO THAT I CAN SEE THE DETAILS OF THE EVENT WHENEVER I CLICK ON IT
AND HIDE IT WHENEVER I AM DONE WITH IT

- Scenario 1: An event element is collapsed by default

        Given a user in on the events page

        When nothing is clicked
    
        Then the event element stays collapsed
- Scenario 2: User can expand an event to see its details
        
        Given a user wants to see details of a collapsed event

        When an event is clicked

        Then the event element expands to show its details

- Scenario 3: User can collapse an event to hide its details
        
        Given a user close an expanded event

        When an event is clicked

        Then the event collapses to hide its details

## FEATURE 3

AS A USER,

I SHOULD BE ABLE TO CHANGE THE NUMBER OF EVENTS SHOWN MANUALLY 

SO THAT I CAN SPECIFY THE NUMBER OF EVENTS SHOWN

- Scenario 1: When user hasn’t specified a number, 32 is the default number

        Given a user has not specified a number for shown events

        When nothing has changed

        Then the number of events default number is 32

- Scenario 2: User can change the number of events they want to see

        Given a user wants to see more or fewer events shown

        When the number is changed

        Then the number of events shown changes accordingly

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
