import { StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import { Title, Paragraph, Card, Modal, Portal } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TechCard = ({ item, onPressDetails }: any) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <TouchableHighlight onPress={showModal}>
      <Card style={styles.techCard}>
        <Card.Content>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
              style={{margin: 30, borderRadius: 15}}
            >
              <View style={styles.nomtechno}>
                <Title>{item.name}</Title>
              </View>
              <Paragraph>DLC : {item.expansion}</Paragraph>
              <Paragraph>Age nécessaire : {item.age} </Paragraph>
              <Paragraph>
                Coûts : {item.cost.Food}{" "}
                <MaterialCommunityIcons
                  name="baguette"
                  size={15}
                  color="#fece85"
                />{" "}
                / {item.cost.Gold}{" "}
                <MaterialCommunityIcons name="gold" size={15} color="#ffd700" />{" "}
              </Paragraph>
              <Paragraph>Temps de recherche : {item.build_time} </Paragraph>
            </Modal>
          </Portal>
          <View style={styles.nomtechno}>
            <Title>{item.name}</Title>
          </View>
        </Card.Content>
      </Card>
    </TouchableHighlight>
  );
};

export default TechCard;

const styles = StyleSheet.create({
  techCard: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 15,
  },
  nomtechno: {
    alignItems: "center",
  },
});
