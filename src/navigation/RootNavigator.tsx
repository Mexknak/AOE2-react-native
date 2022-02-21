import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CivScreen from "../screens/CivScreen";
import HomeScreen from "../screens/HomeScreen";
import TechnoScreen from "../screens/TechnoScreen";
import UnitScreen from "../screens/UnitScreen";

export type RouteParams = {
  Home: undefined;
  Civilisations: undefined;
  Technologies: undefined;
  Unitees: undefined;
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
          name="Civilisations"
          component={CivScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="Technologies"
          component={TechnoScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
        <Stack.Screen
          name="Unitees"
          component={UnitScreen}
          options={{
            animation: "slide_from_right",
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
