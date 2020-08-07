import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingsScreen from "../Screens/ListingsScreen";
import ListingsEditScreen from "../Screens/ListingsEditScreen";
import AccountScreen from "../Screens/AccountScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Listings" component={FeedNavigator}></Tab.Screen>
    <Tab.Screen name="ListingEdit" component={ListingsEditScreen}></Tab.Screen>
    <Tab.Screen name="Account" component={AccountScreen}></Tab.Screen>
  </Tab.Navigator>
);
export default AppNavigator;
