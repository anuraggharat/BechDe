import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import ViewImageScreen from "./App/Screens/ViewImageScreen";
import ListingsScreen from "./App/Screens/ListingsScreen";
import ItemScreen from "./App/Screens/ItemScreen";
import MessagesScreen from "./App/Screens/MessagesScreen";
import AccountScreen from "./App/Screens/AccountScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MessagesScreen /> */}
      <AccountScreen />
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
  },
});
