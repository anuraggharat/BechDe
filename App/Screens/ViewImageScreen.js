import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeBtn}>
        <MaterialCommunityIcons name="close" size={40} color="white" />
      </View>
      <View style={styles.deleteBtn}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={40}
          color="white"
        />
      </View>
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
    position: "absolute",
    top: 40,
    left: 40,
  },
  deleteBtn: {
    position: "absolute",
    top: 40,
    right: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
