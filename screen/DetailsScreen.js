import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import Home from "./HomeScreen";
import LogoTitle from "./LogoTitle";
export default class DetailsScreen extends Component {
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", "A Nested Details Screen"),
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold'
      },
      //headerRight: <View></View>,
      headerLeft:null
    };
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getParam, setParams } = this.props.navigation;
    let itemId = getParam("itemId", "");
    let otherParam = getParam("otherParam", "");
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "green"
        }}
      >
        <Text>DetailsScreen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Update the title"
          onPress={() =>
            setParams({ otherParam: "Updated!" })
          }
        />
        <Button
          title="Go to Home... again"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go to Details... again by push"
          onPress={() => this.props.navigation.push("Details")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
