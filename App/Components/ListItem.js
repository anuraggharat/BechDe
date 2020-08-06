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
import Icon from "./Icon";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor={colors.primary}
        onPress={() => alert("Pressed")}
      >
        <View style={styles.container}>
          {IconComponent}
          {image && (
            <Image source={image} style={styles.displayPicture}></Image>
          )}
          <View style={styles.details}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText style={styles.subTile}>{subTitle}</AppText>}
          </View>
          <Icon name="chevron-right" />
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
    elevation: 10,
    alignItems: "center",
  },
  displayPicture: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  details: {
    paddingHorizontal: 20,
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: colors.black,
  },
  subTile: {
    color: colors.secondary,
  },
});
