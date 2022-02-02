import { View, Text, StyleSheet, ImageBackground, FlatList } from "react-native";
import * as React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ActivityIndicator, Headline } from "react-native-paper";
import { useCivilisations } from "../hooks/useCivilisation";
import CardAOE from "../components/Card";

type Props = {};

const CivScreen = (props: Props) => {
  const { isLoading, isError, data } = useCivilisations();


  if (isLoading) {
    return <Text>Is loading</Text>;
  }
  if (isError) {
    return <Text>ALAN !!! ALED !!!</Text>;
  }

  const renderItem = (props: any) => <CardAOE {...props}/>
 
console.log(data.civilizations);


  return (
      <View>
        <ImageBackground
          source={require("../img/fondAOE.png")}
          style={styles.image}
        >
          <Headline style={styles.headline}>Liste des Civilisations</Headline>
        </ImageBackground>
        <FlatList
        data={data.civilizations}
                renderItem={renderItem}
        keyExtractor={(props) => props.id}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    color: Colors.white,
    textAlign: "center",
    lineHeight: 150,
  },
  image: {
    height: 250,
    alignItems: "center",
  },
});

export default CivScreen;
