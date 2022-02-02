import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Title,  Paragraph, Card  } from 'react-native-paper';

type Props = {};

// interface Card {
//   name: string;
//   army_type: string;
//   team_bonus: string;
// }


const CardAOE = ({props}: any) => {
  console.log(props);
  
  return (
    <Card>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
        {/* <Paragraph>{props.name} </Paragraph>
        <Paragraph>{props.army_type} </Paragraph>
        <Paragraph>{props.team_bonus} </Paragraph> */}
      </Card.Content>
    </Card>
  );
};

export default CardAOE;

const styles = StyleSheet.create({});
