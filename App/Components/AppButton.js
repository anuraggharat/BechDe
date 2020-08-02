import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

export default function AppButton({ text, onPress, propsColor = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[propsColor] }]}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    color: "white",
    padding: 10,
    justifyContent: "center",
    marginVertical: 10,
    alignItems: "center",
  },
  btnText: {
    color: colors.white,
    fontSize: 25,
    fontWeight: "600",
  },
});
