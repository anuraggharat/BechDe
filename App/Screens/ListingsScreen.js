import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import Card from "../Components/Card";

export default function ListingsScreen() {
  return (
    <View style={styles.container}>
      <Card
        image={require("../assets/jacket.jpg")}
        title="Red Jacket for Sale"
        subTitle="3000/-"
      />
      <Card
        image={require("../assets/jacket.jpg")}
        title="Red Jacket for Sale"
        subTitle="3000/-"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
    height: "100%",
    width: "100%",
    backgroundColor: colors.black,
  },
});
