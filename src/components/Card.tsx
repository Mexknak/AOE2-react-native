import { StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import {
  Title,
  Paragraph,
  Card,
  Button,
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
            >
              <Paragraph>{item.army_type} </Paragraph>
            </Modal>
          </Portal>
          <Title>{item.name} </Title>
          <Paragraph>Type d'armée : {item.army_type} </Paragraph>
          <Paragraph>Bonus d'équipe : {item.team_bonus} </Paragraph>
        </Card.Content>
      </Card>
    </TouchableHighlight>
  );
};

export default CardAOE;

const styles = StyleSheet.create({
  civCard: {
    marginHorizontal: 20,
    marginBottom: 32,
  },
});
