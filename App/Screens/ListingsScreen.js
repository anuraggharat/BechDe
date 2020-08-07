import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import Card from "../Components/Card";

export default function ListingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card
        image={require("../assets/jacket.jpg")}
        title="Red Jacket for Sale"
        subTitle="3000/-"
        onPress={() => navigation.navigate("FeedDetails")}
      />
      <Card
        image={require("../assets/jacket.jpg")}
        title="Red Jacket for Sale"
        subTitle="3000/-"
        onPress={() => navigation.navigate("FeedDetails")}
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
  },
});
