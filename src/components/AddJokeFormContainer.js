import React, { Component } from "react";
import AddJokeForm from "./AddJokeForm";

import { addJoke } from "../actions/joke";

class AddJokeFormContainer extends Component {
  state = { joke: "", jokeImage: "", punchLine: "" };
  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = event => {
    event.preventDefault();

    addJoke(this.state.joke, this.state.punchLine, this.state.jokeImage);

    this.setState({
      joke: "",
      jokeImage: "",
      punchLine: ""
    });
    /* this.props.history.push(`/events/${eventId}/tickets/${ticketId}/comments`); */
  };

  render() {
    return (
      <div>
        <AddJokeForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}

export default AddJokeFormContainer;
