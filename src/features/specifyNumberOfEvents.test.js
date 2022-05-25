import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
    let AppWrapper;

    test('When user hasn\'t specified a number, 15 is the default number.', ({ given, when, then }) => {
        given('the user is on the main page of the app', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user hasn\'t specified a number of events', () => {
            AppWrapper.update();
        });

        then('the default number of displayed events will be 15', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
            NumberOfEventsWrapper.find('.numberInput').simulate('change', { target: { value: 15 } });
            expect(AppWrapper.state('eventCount')).toEqual(15)
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('the user is on the main page', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the user set a number of events he or she wants to see in the “Number of events” box', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
            NumberOfEventsWrapper.find('.numberInput').simulate('change', { target: { value: 1 } });
        });

        then('this number of events will be displayed', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
            NumberOfEventsWrapper.find('.numberInput').simulate('change', { target: { value: 1 } });
            expect(AppWrapper.state('eventCount')).toEqual(1)
        });
    });
});