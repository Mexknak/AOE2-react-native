import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    FlatList,
  } from "react-native";
  import * as React from "react";
  import { Colors } from "react-native/Libraries/NewAppScreen";
  import { ActivityIndicator, Headline, Provider } from "react-native-paper";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { QueryClient, QueryClientProvider } from "react-query";
  import { useTechnology } from "../hooks/useTechnologie";
  import TechCard from "../components/CardTech";
  
  type Props = {};
  
  const UnitScreen = (props: Props) => {
    const { isLoading, isError, data } = useTechnology();
  
    if (isLoading) {
      return (
        <ActivityIndicator style={{ marginTop: "60%" }}>
          Is loading
        </ActivityIndicator>
      );
    }
  
    if (isError) {
      return <Text>ALAN !!! ALED !!!</Text>;
    }
  
    function onPressDetails() {
      alert("bonjour");
    }
  
    const renderItem = (props: any) => (
      <TechCard onPressDetails={onPressDetails} {...props} />
    );
  
    const queryClient = new QueryClient();
  
    return (
      <Provider>
        <QueryClientProvider client={queryClient}>
          <SafeAreaView>
            <View>
              <ImageBackground
                source={require("../img/fondAOE.png")}
                style={styles.image}
              >
                <Headline style={styles.headline}>
                  Liste des Unitées
                </Headline>
              </ImageBackground>
              <FlatList
                data={data.technologies}
                renderItem={renderItem}
                keyExtractor={(props) => props.id}
              />
            </View>
          </SafeAreaView>
        </QueryClientProvider>
      </Provider>
    );
  };
  
  const styles = StyleSheet.create({
    headline: {
      color: Colors.white,
      textAlign: "center",
      lineHeight: 150,
      fontWeight: "bold",
    },
    image: {
      height: 250,
      alignItems: "center",
    },
  });
  
  export default UnitScreen;
  