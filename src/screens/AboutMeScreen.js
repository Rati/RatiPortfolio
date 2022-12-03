import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text} from 'react-native';
import MyButton from '../components/MyButton';

export default function AboutMeScreen({navigation, route}) {
  
  return (
    <View style={styles.container}>
      <MyButton details= "click button"></MyButton>
      <Button title= "About Me" color="#683E58" >

      </Button>
      <Text> About Me page</Text>
      <Text>Welcome {route.params.name}</Text>
      <Button
      title="Go to Rati Home screen" color="#D56A9B"
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
    backgroundColor: '#CCB1D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});