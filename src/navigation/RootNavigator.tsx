import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CivScreen from "../screens/CivScreen";
import HomeScreen from "../screens/HomeScreen";

export type RouteParams = {
  Home: undefined;
  Civ: undefined;
};

const Stack = createNativeStackNavigator<RouteParams>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            animation: "slide_from_left",
          }}
        />
        <Stack.Screen
          name="Civ"
          component={CivScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
