import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventCount: 15
  }

  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    if (eventCount < 1) {
      return this.setState({
        eventCount: 0,
        errorText: 'Select a number between 1 and 15',
      });
    } else {
      this.setState({
        eventCount,
        errorText: '',
      })
    }
    this.props.updateEvents('', eventCount);
  };
  
  render() {
    return (
      <div className="numberOfEvents">
        <h4>Number of events to display</h4>
        <input
          type="number"
          className="numberInput"
          placeholder="Enter Number of Events"
          value={this.state.eventCount}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;