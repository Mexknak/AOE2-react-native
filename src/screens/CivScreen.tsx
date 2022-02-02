import {
  View,
  Text,
  StyleSheet,
  ImageBackgroundBase,
  ImageBackground,
} from "react-native";
import * as React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Headline } from "react-native-paper";

type Props = {};

fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
  },
});

const CivScreen = (props: Props) => {
  return (
    <View>
      <View>
        <ImageBackground source={require('../img/fondAOE.png')} style={styles.image} >
        <Headline style={styles.headline}>Liste des Civilisations</Headline>
        </ImageBackground>
      </View>
      <View>
        <Text> </Text>
      </View>
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
