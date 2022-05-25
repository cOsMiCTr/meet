import React, { Component } from "react";
import { ErrorAlert, WarningAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    eventCount: 15,
    errorText: "",
    warningText: "",
  };

  handleEventInputChanged = (event) => {
    const eventCount = event.target.value;
    if (eventCount < 1) {
      return this.setState({
        eventCount: 0,
        errorText: "",
        warningText: "The number must be numeric!",
      });
    } else if (eventCount > 26) {
      this.setState({
        eventCount: 25,
        errorText: "Maximum events to be shown at the same time is 25!",
        warningText: "",
      });
    } else {
      this.setState({
        eventCount,
        errorText: "",
        warningText: "",
      });
    }
    this.props.updateEvents("", eventCount);
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
        <ErrorAlert text={this.state.errorText} />
        <WarningAlert text={this.state.warningText} />
      </div>
    );
  }
}

export default NumberOfEvents;
