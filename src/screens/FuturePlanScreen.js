import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text} from 'react-native';
import MyButton from '../components/MyButton';

export default function FuturePlanScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <MyButton details= "click Me"></MyButton>
      <Button title= "Future Plan" color="#C785D1" >
      </Button>
      <Text> Future Plan page</Text>
      {/* <Text>Welcome {routeA.params.name}</Text> */}
      <Button
      title="Go to Rati Home screen" color="#C785D1"
      onPress={() =>
        navigation.navigate('RatiHome')
      }
    />
      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D1F1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});