import React, { Component } from "react";
import DisplayMessages from "./DisplayMessages";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <DisplayMessages />;
  }
}
