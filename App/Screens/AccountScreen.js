import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Screen from "../Components/Screen";
import ListItem from "../Components/ListItem";
import Icon from "../Components/Icon";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";
import Seperator from "../Components/Seperator";

export default function AccountScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItem
          title="Anurag Gharat"
          subTitle="anuraggharat55@gmail.com"
          image={require("../assets/anurag.jpg")}
        ></ListItem>
      </View>
      <View style={styles.container}>
        <ListItem
          title="My Listings"
          IconComponent={
            <Icon name="format-list-bulleted" bgcolor={colors.primary} />
          }
        />
        <Seperator />
        <ListItem
          title="My Listings"
          IconComponent={<Icon name="email" bgcolor={colors.secondary} />}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Logout"
          IconComponent={<Icon name="logout" bgcolor="#fcd112" />}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: "#fff",
  },
});
