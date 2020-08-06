import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import colors from "../config/colors";

export default function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>;
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.offwhite,
  },
});
