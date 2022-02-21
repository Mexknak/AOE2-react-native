import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { RootNavigator } from "./src/navigation/RootNavigator";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
