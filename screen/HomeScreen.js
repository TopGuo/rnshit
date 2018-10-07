import React, { Component } from "react";
import { View, Text, Button, StatusBar, Platform } from "react-native";
import Details from "./DetailsScreen";
import LogoTitle from "./LogoTitle";
const isAndroid = Platform.OS === "android";
export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "首页",
      headerTitle: <LogoTitle />,

      headerRight: (
        <Button
          //onPress={navigation.getParam("increaseCount")}
          //onPress={()=>{return navigation.getParam('increaseCount')}}
          onPress={() => navigation.navigate("MyModal")}
          title="+1"
          color="#fff"
        />
      )
      //header: null
    };
  };
  state = {
    count: 0
  };
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0
    // };
  }
  /**
   * 组件挂载
   */
  componentDidMount = () => {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("light-content");
      isAndroid && StatusBar.setBackgroundColor("#6a51ae");
    });
  };
 componentWillUnmount = () => {
  this._navListener.remove();
 };
 
  /**
   *增加数字
   */
  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#6a51ae"
        }}
      >
        <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
        <Text>
          Home Screen
          {`数量：${this.state.count}`}
        </Text>
        <Button
          title="Go to Details"
          onPress={() =>
            navigate("Details", {
              itemId: 86,
              otherParam: "详细页"
            })
          }
        />
      </View>
    );
  }
}
