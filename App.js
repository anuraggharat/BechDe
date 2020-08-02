import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./App/Screens/WelcomeScreen";
import ViewImageScreen from "./App/Screens/ViewImageScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ViewImageScreen></ViewImageScreen> */}
      <WelcomeScreen></WelcomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
