import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

export default function Card({ image, title, subTitle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.cardBody}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: colors.offwhite,
    marginBottom: 20,
  },
  cardBody: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontWeight: "800",
  },
  subTitle: {
    color: colors.secondary,
    marginTop: 10,
  },
  image: {
    height: 200,
    width: "100%",
    overflow: "hidden",
  },
});
