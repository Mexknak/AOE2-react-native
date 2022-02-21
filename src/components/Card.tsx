import { StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import {
  Title,
  Paragraph,
  Card,
  Modal,
  Portal,
} from "react-native-paper";

interface IPropsAOE {
  item: {
    name: string;
    army_type: string;
    team_bonus: string;
  };
}

const CardAOE = ({ item }: IPropsAOE) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <TouchableHighlight onPress={showModal}>
      <Card style={styles.civCard}>
        <Card.Content>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
              style={{margin: 30, borderRadius: 15}}
            >
              <Paragraph>Type d'armée : {item.army_type} </Paragraph>
              <Paragraph>Bonus d'équipe : {item.team_bonus} </Paragraph>
            </Modal>
          </Portal>
          <View style={styles.nomciv}>
          <Title>{item.name} </Title>
          </View>
        </Card.Content>
      </Card>
    </TouchableHighlight>
  );
};

export default CardAOE;

const styles = StyleSheet.create({
  civCard: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    marginHorizontal: 20,
    marginBottom: 32,
    borderRadius: 15,
  },
  nomciv: {
    alignItems: "center",
  }
});
