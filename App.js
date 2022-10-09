import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text } from "react-native";
import Volunteers from "./screens/Volunteers";
import LogIn from "./screens/LogIn";
import PreviousOrders from "./screens/PreviousOrders";
import SignUp from "./screens/SignUp";
import SignUpPart from "./screens/SignUpPart";

class App extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    function MyTabs() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Volunteers" component={Volunteers} />
          <Tab.Screen name="SignUp" component={SignUp}/>
          <Tab.Screen name="SignUpPart" component={SignUpPart}/>
        </Tab.Navigator>
      );
    }

    return <Volunteers />;
  }
}

export default App;
