import React from "react";
import { StyleSheet, FlatList } from "react-native";
import ListItem from "../Components/ListItem";
import Screen from "../Components/Screen";
import Seperator from "../Components/Seperator";
import RightSwipeItem from "../Components/RightSwipeItem";
const messages = [
  {
    id: 1,
    title: "Anurag Gharat",
    message: "hey Anurag!!",
    image: require("../assets/anurag.jpg"),
  },
  {
    id: 2,
    title: "Aniruddha Gharat",
    message: "hey Anurag!!",
    image: require("../assets/anurag.jpg"),
  },
  {
    id: 3,
    title: "Aravind Gharat",
    message: "hey Anurag!!",
    image: require("../assets/anurag.jpg"),
  },
];

export default function MessagesScreen() {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.message}
            image={item.image}
            renderRightActions={RightSwipeItem}
          />
        )}
        ItemSeparatorComponent={Seperator}
      ></FlatList>
    </Screen>
  );
}

const styles = StyleSheet.create({});
