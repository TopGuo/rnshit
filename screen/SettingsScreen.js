import React, { Component } from "react";
import { View, Text, Button, StatusBar, Platform } from "react-native";

const isAndroid = Platform.OS === "android";
export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "设置"
    };
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
      isAndroid && StatusBar.setBackgroundColor("#ecf0f1");
    });
  }
  componentWillUnmount = () => {
    this._navListener.remove();
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}
