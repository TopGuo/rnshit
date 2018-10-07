/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar
} from "react-native";
//import {Ionicons} from "react-native-vector-icons";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { green } from "ansi-colors";
import HomeScreen from "./screen/HomeScreen";
import DetailsScreen from "./screen/DetailsScreen";
import ModalScreen from "./screen/ModalScreen";
import SettingsScreen from "./screen/SettingsScreen";

/**
 *
 */
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Details: DetailsScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack
    },
    Settings: {
      screen: SettingsStack
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // tabBarIcon: ({ focused, horizontal, tintColor }) => {
      //   const { routeName } = navigation.state;
      //   let iconName;
      //   if (routeName === "Home") {
      //     iconName = `ios-information-circle${focused ? "" : "-outline"}`;
      //   } else if (routeName === "Settings") {
      //     iconName = `ios-options${focused ? "" : "-outline"}`;
      //   }
      //   // You can return any component that you like here! We usually use an
      //   // icon component from react-native-vector-icons
      //   return (
      //     <Ionicons
      //       name={iconName}
      //       size={horizontal ? 20 : 25}
      //       color={tintColor}
      //     />
      //   );
      // }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    //tabBarComponent:()=>null
  }
);

/**
 * stackNavigator 路由
 */
const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);
export default class App extends Component {
  render() {
    return <TabNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
