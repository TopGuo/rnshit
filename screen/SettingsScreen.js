import React, { Component } from "react";
import {
  View, Text, Button, StatusBar, Platform,
  BackHandler, ToastAndroid, Alert
} from "react-native";

const isAndroid = Platform.OS === "android";
export default class SettingsScreen extends Component {
  _didFocusSubscription;
  _willBlurSubscription;
  static navigationOptions = ({ navigation }) => {

    return {
      title: "设置",
      headerTitleStyle: {
        flex: 1, textAlign: 'center'
      },

    };
  };
  constructor(props) {
    console.log('---------constructor')
    super(props);
    this.state = {};
    this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
      BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }
  componentDidMount() {
    console.log('componentDidMount--------------')
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
      isAndroid && StatusBar.setBackgroundColor("#ecf0f1");
    });
    /**
     * 监听
     */
    this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
    );
  }

  componentWillUnmount = () => {
    console.log('---componentWillUnmount')
    this._navListener.remove();
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
  };
  onBackButtonPressAndroid = () => {
    
    //点击返回键盘时间小于2m 则返回
    if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
      //最近2秒内按过back键，可以退出应用。            B
      //BackHandler.exitApp();
      return false;
    }
    this.lastBackPressed = Date.now();
    ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
    return true;
  };


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
