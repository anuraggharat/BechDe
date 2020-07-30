import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}></View>
      <View style={styles.deleteBtn}></View>
      <Image
        resizeMode={"contain"}
        style={styles.image}
        source={require("../assets/chair.jpg")}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeBtn: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 40,
  },
  deleteBtn: {
    height: 50,
    width: 50,
    position: "absolute",
    top: 40,
    right: 40,
    backgroundColor: colors.secondary,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
