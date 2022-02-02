import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Title,
  Paragraph,
  Card,
  Button,
  Modal,
  Portal,
  Provider,
} from "react-native-paper";

interface IPropsAOE {
  name: string;
  army_type: string;
  team_bonus: string;
  onPressDetails: void;
}

const CardAOE = ({ item, onPressDetails }: any) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Card style={styles.civCard}>
      <Card.Content>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Paragraph>{item.army_type} </Paragraph>
            <Paragraph>{item.team_bonus} </Paragraph>
          </Modal>
        </Portal>
        <Title>{item.name} </Title>
        <Paragraph>{item.army_type} </Paragraph>
        <Paragraph>{item.team_bonus} </Paragraph>
        <Button mode="outlined" onPress={showModal}>
          Details
        </Button>
      </Card.Content>
    </Card>
  );
};

export default CardAOE;

const styles = StyleSheet.create({
  civCard: {
    marginHorizontal: 20,
    marginBottom: 32,
  },
});
function setVisible(arg0: boolean) {
  throw new Error("Function not implemented.");
}
