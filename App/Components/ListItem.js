import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.primary}
        onPress={() => alert("Pressed")}
      >
        <View style={styles.container}>
          <Image source={image} style={styles.displayPicture}></Image>
          <View style={styles.details}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTile}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
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
