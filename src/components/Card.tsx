import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Title,  Paragraph, Card, Button  } from 'react-native-paper';


// interface Card {
//   name: string;
//   army_type: string;
//   team_bonus: string;
// }

interface IPropsAOE {
      name : string
      army_type : string
      team_bonus : string
}

const CardAOE = ({item}: any) => {
  
  return (
    <Card style={styles.civCard}>
      <Card.Content>
        <Title>{item.name} </Title>
        <Paragraph>{item.army_type} </Paragraph>
        <Paragraph>{item.team_bonus} </Paragraph>
        <Button mode='outlined'> Details </Button>
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
