import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screens/movies/MoviesContainer";
import Tv from "../screens/Tv/TvContainer";
import Search from "../screens/search/SearchContainer";
import Favs from "../screens/Favs";
import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();
const getHeaderName = (route) =>
  route?.state?.routeNames[route.state.index] || "Movies";
export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({
      title: name,
    });
  }, [route]);

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          //icon이 운영체제를 확인하기때문에 구별해야함.
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";

          if (route.name === "Movies") {
            iconName += "film";
          } else if (route.name === "TV") {
            iconName += "tv";
          } else if (route.name === "Search") {
            iconName += "search";
          } else if (route.name === "Discovery") {
            iconName += "heart";
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "grey"}
              size={30}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: "black",
          borderTopColor: "black",
        },
      }}
    >
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="TV" component={Tv} />
      <Tabs.Screen name="Discovery" component={Favs} />
    </Tabs.Navigator>
  );
};
