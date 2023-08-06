import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InnerNavigation from "./InnerNavigation";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BookmarksScreen from "../screens/BookmarksScreen/BookmarksScreen";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import OnboardingScreen from "../screens/OnboardingScreen/OnboardingScreen";
import AuthScreen from "../screens/AuthScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BookmarkNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmarks Screen"
        component={BookmarksScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bookmarks Details"
        component={DetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "white",
      }}
      labeled={false}
    >
      <Tab.Screen
        name="Home"
        component={InnerNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "home" : "home-outline"}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarkNav}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "bookmark" : "bookmark-outline"}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name={focused ? "cog" : "cog-outline"}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer theme={{ colors: { secondaryContainer: "#E0E0E0" } }}>
      <Stack.Navigator initialRouteName="AuthScreen">
        <Stack.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
