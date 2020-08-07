import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppText from "../Components/AppText";
import ListItem from "../Components/ListItem";
import colors from "../config/colors";

export default function ItemScreen() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.details}>
        <AppText style={styles.title}>Red Jacket</AppText>
        <AppText style={styles.subTitle}>3000/-</AppText>
      </View>
      <View style={styles.info}>
        <ListItem
          title="Anurag Gharat"
          subTitle="anuraggharat55@gmail.com"
          image={require("../assets/anurag.jpg")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: colors.offwhite,
  },
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    width: "100%",
    padding: 20,
  },
  info: {
    marginTop: 20,
  },
  title: {
    color: colors.black,
    fontSize: 30,
  },
  subTitle: {
    color: colors.secondary,
  },
});
