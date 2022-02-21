import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

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
      <Button title={"Civilisations"} onPress={onCivilizationPress} />
      <Button title={"Unitees"} onPress={onUnitPress} />
      <Button title={"technologies"} onPress={onTechnologyPress} />
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
    maxWidth: 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default HomeScreen;
