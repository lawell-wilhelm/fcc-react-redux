import React, { Component } from "react";

export default class DisplayMessages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    const items = this.props.messages.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <h2>Type in the message</h2>
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.submitMessage}>Submit message</button>
        <ul>{items}</ul>
      </div>
    );
  }
}
