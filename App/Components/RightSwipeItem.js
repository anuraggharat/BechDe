import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function RightSwipeItem() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="trash-can" color="white" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});
