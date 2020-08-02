import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default function ListItem() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/anurag.jpg")}
        style={styles.displayPicture}
      ></Image>

      <View style={styles.details}>
        <AppText style={styles.title}>Anurag Gharat</AppText>
        <AppText style={styles.subTile}>13 Listings</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  displayPicture: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  details: {
    paddingHorizontal: 20,
  },
  title: {
    color: colors.black,
  },
  subTile: {
    color: colors.secondary,
  },
});
