import { StyleSheet, View } from 'react-native';
import CivScreen from './src/screens/CivScreen';

export default function App() {
  return (
    <View style={styles.container}>
       <CivScreen></CivScreen>
    </View>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
