import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default function PickerItem({ label, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    color: colors.black,
  },
});
