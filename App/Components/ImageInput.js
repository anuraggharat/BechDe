import React from "react";
import { View, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

export default function ImageInput({ imgUri }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imgUri }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: colors.offwhite,
    height: 100,
    width: 100,
  },
});
