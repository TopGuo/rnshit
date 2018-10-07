import React, { Component } from "react";
import { View, Text, Image } from "react-native";

export default class LogoTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Image
        source={require("../images/logoTitle.png")}
        style={{ width: 50, height: 50 }}
      />
    );
  }
}
