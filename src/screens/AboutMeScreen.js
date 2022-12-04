import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text} from 'react-native';
import MyButton from '../components/MyButton';

export default function AboutMeScreen({navigation, route}) {
  
  return (
    <View style={styles.container}>
      <MyButton details= "click Me"></MyButton>
      <Button title= "About Me" color="#384058" >

      </Button>
      <Text style={styles.text}> I'm an analytical and problem solver.</Text>
      <Text></Text>
      {/* <Text>Welcome {route.params.name}</Text> */}
      <Button
      title="Go to Rati Home screen" color="#384058"
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
    backgroundColor: '#5d5d95',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#C2C2DC',
    fontWeight: '200',
    fontStyle: 'italic',
    fontSize: 16
  }  
});