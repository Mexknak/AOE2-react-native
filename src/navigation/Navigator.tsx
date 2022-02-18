// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";

// import { useCivilisations } from "../hooks/useCivilisation";

// const Stack = createStackNavigator();

// export const Navigator = () => {
//   const { data } = useCivilisations();

//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         {data ? (
//           <Stack.Screen name={"BOTTOM_TABS"} component={BottomTabNavigator} />
//         ) : (
//           <Stack.Screen name={"AUTH_STACK"} component={AuthNavigator} />
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };