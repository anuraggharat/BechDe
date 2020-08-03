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
import colors from "./App/config/colors";
import AppPicker from "./App/Components/AppPicker";
import LoginScreen from "./App/Screens/LoginScreen";

const categories = [
  {
    name: "furniture",
    value: 1,
  },
  {
    name: "books",
    value: 2,
  },
  {
    name: "household",
    value: 3,
  },
];

export default function App() {
  const [category, setCateory] = useState("");

  return (
    <View style={styles.container}>
      {/* <MessagesScreen /> */}
      {/* <AccountScreen /> */}
      <LoginScreen />
      {/* <ViewImageScreen></ViewImageScreen> */}
      {/* <WelcomeScreen></WelcomeScreen> */}
      {/* <ListingsScreen /> */}
      {/* <ItemScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors.offwhite,
  },
});
