import React from 'react';
import NumberOfEvents from '../NumberOfEvents';
import { shallow } from 'enzyme';

describe('<NumberOfEvents /> component', () => {

    let NumberOfEventsWrapper;

    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('render input field for number of events', () => {
        expect(NumberOfEventsWrapper.find('.inputNumberOfEvents')).toHaveLength(1);
    });

    test('change number of events when input changes', () => {
        NumberOfEventsWrapper.setState({ numberOfEvents: 15 });
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toEqual(15);
    });
})