import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import WelcomeScreen from "./App/Screens/WelcomeScreen";
import ViewImageScreen from "./App/Screens/ViewImageScreen";
import ListingsScreen from "./App/Screens/ListingsScreen";
import ItemScreen from "./App/Screens/ItemScreen";
import MessagesScreen from "./App/Screens/MessagesScreen";
import AccountScreen from "./App/Screens/AccountScreen";
import Screen from "./App/Components/Screen";
import AppInput from "./App/Components/AppInput";
import AppPicker from "./App/Components/AppPicker";
import LoginScreen from "./App/Screens/LoginScreen";
import ListingsEditScreen from "./App/Screens/ListingsEditScreen";

import colors from "./App/config/colors";

import ImageInputList from "./App/Components/ImageInputList";
import AuthNavigator from "./App/navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.offwhite,
  },
  img: {
    height: 100,
    width: 100,
  },
});
