import { StyleSheet,View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RouteParams } from "../navigation/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type Props = {};

const HomeScreen = (props: Props) => {

  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const onCivilizationPress = () => {
    navigation.navigate("Civ");
  }
  return (
        <View style={styles.container}>
          <Text>Home Screen ! </Text>
          <Button title={"Civilizations"} onPress={onCivilizationPress} />
          <Button title={"Units"} onPress={() => {}} />
          <Button title={"technologies"} onPress={() => {}} />
        </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30,
  },
});


export default HomeScreen;