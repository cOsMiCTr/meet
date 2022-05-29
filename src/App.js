import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { extractLocations, getEvents } from "./api";
import { OfflineAlert } from "./Alert";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 15,
    eventCount: 15,
    currentLocation: "all",
    offlineText: "",
  };

  updateEvents = (location, eventNumber) => {
    const { currentLocation, eventCount } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const filteredEvents = locationEvents.slice(0, eventCount);
        this.setState({
          events: filteredEvents,
          currentLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          currentLocation === "all"
            ? events
            : events.filter((event) => event.location === currentLocation);
        const filteredEvents = locationEvents.slice(0, eventNumber);
        this.setState({
          events: filteredEvents,
          eventCount: eventNumber,
        });
      });
    }
  };

  async componentDidMount() {
    this.mounted = true;

    document.getElementById("status").innerHTML = navigator.onLine
      ? ""
      : "offline";

    var target = document.getElementById("target");

    function handleStateChange() {
      var newState = document.createElement("p");
      var state = navigator.onLine
        ? ""
        : "You are currently offline! Please provide a valid internet connection!";
      target.innerHTML = state;
      target.appendChild(newState);
    }

    window.addEventListener("online", handleStateChange);
    window.addEventListener("offline", handleStateChange);

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  async componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { eventCount } = this.state;

    return (
      <div>
        <p id="status"></p>
        <div id="target"></div>

        <h1>Meet APP by cOsMiC</h1>
        <p style={{ textAlign: "center" }}>
          Please choose a city to show its events!
        </p>
        <div className="App">
          <CitySearch
            locations={this.state.locations}
            updateEvents={this.updateEvents}
          />
          <NumberOfEvents
            updateEvents={this.updateEvents}
            eventCount={eventCount}
          />
          <EventList events={this.state.events} />
        </div>
      </div>
    );
  }
}

export default App;
