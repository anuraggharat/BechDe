import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function Seperator() {
  return <View style={styles.seprator}></View>;
}
const styles = StyleSheet.create({
  seprator: {
    backgroundColor: colors.black,
    height: 1,
    width: "100%",
  },
});
