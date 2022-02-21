import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button } from "react-native-paper";

type Props = {};

const HomeScreen = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onCivilizationPress = () => {
    navigation.navigate("Civilisations");
  };
  const onTechnologyPress = () => {
    navigation.navigate("Technologies");
  };
  const onUnitPress = () => {
    navigation.navigate("Unitees");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titre}> App of Empire </Text>
      <Text style={styles.hr}>________________</Text>
      <View style={styles.bouton}>
        <Button mode="contained" onPress={onCivilizationPress}>
          {" "}
          Civilisations{" "}
        </Button>
      </View>
      <View style={styles.bouton}>
        <Button mode="contained" onPress={onUnitPress}>
          {" "}
          Unitées{" "}
        </Button>
      </View>
      <View style={styles.bouton}>
        <Button mode="contained" onPress={onTechnologyPress}>
          {" "}
          Technologies{" "}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 10,
  },
  titre: {
    maxWidth: 200,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  bouton: {
    margin: 10,
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  hr: {
    maxWidth: 200,
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: 20,
  },
});

export default HomeScreen;
