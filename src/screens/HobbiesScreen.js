import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text} from 'react-native';
import MyButton from '../components/MyButton';

export default function HobbiesScreen({navigation}) {
  
  return (
    <View style={styles.container}>
      <MyButton details= "click Me"></MyButton>
      <Button title= "Hobbies" color="#4848A5" >

      </Button>
      <Text style={styles.text}> I love music, cooking and swimming.</Text>
      <Text style={styles.text}></Text>
      {/* <Text>Welcome {routeA.params.name}</Text> */}
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