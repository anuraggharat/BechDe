import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../Screens/ListingsScreen";
import ItemScreen from "../Screens/ItemScreen";

const Feed = createStackNavigator();

export default FeedNavigator = () => (
  <Feed.Navigator mode="modal">
    <Feed.Screen name="Feed" component={ListingsScreen} />
    <Feed.Screen
      name="FeedDetails"
      component={ItemScreen}
      options={{ headerShown: false }}
    />
  </Feed.Navigator>
);
