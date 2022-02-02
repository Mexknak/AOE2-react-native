import { StyleSheet, View } from "react-native";
import CivScreen from "./src/screens/CivScreen";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { Provider } from "react-native-paper";

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <CivScreen />
        </View>
      </QueryClientProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
