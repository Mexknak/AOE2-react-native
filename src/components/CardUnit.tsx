import { StyleSheet } from "react-native";
import React from "react";
import {
  Title,
  Paragraph,
  Card,
  Button,
  Modal,
  Portal,
} from "react-native-paper";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const TechCard = ({ item, onPressDetails }: any) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Card style={styles.techCard}>
      <Card.Content>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            <Title>{item.name}</Title>
            <Paragraph>DLC : {item.expansion}</Paragraph>
            <Paragraph>Age nécessaire : {item.age} </Paragraph>
            <Paragraph>Coûts : {item.cost.Food} <MaterialCommunityIcons name="baguette" size={15} color="#fece85" /> / {item.cost.Gold} <MaterialCommunityIcons name="gold" size={15} color="#ffd700" /> </Paragraph>
            <Paragraph>Temps de recherche : {item.build_time} </Paragraph>
          </Modal>
        </Portal>
        <Title>{item.name}</Title>

        <Button mode="outlined" onPress={showModal}>
          Details
        </Button>
      </Card.Content>
    </Card>
  );
};

export default TechCard;

const styles = StyleSheet.create({
  techCard: {
    marginHorizontal: 20,
    marginBottom: 32,
  },
});
