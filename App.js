import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from './src/components/MyButton';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello!! This is my portfolio App</Text>
      <Text>My name is Rati Sudha</Text>
      <Text>I'm learning Mobile App Development</Text>
      <MyButton></MyButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
