import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from 'react-native';
import MyButton from '../components/MyButton';

export default function RatiHomeScreen({ navigation }) {
  
  
    return (
      <View style={styles.container}>
        <MyButton details= "click button"></MyButton>
        <Button title= "Rati Home" color="#4848A5" >
  
        </Button>
        <Text style={styles.text}>My name Rati Sudha</Text>
        <Text style={styles.text}>Coding is my passion</Text>
        <Text></Text>
        <Button
        title="Go to About Me" color="#384058"
        onPress={() =>
          navigation.navigate('AboutMe', {name: 'Rati'})} />
          <Text></Text>
        <Button
        title="Go to Hobbies" color="#384776"
        onPress={() =>
          navigation.navigate('Hobbies', {name: 'Rati'})} />
          <Text></Text>
        <Button
        title="Go to Skills" color="#384058"
        onPress={() =>
          navigation.navigate('Skills', {name: 'Rati'})} />
          <Text></Text>
        <Button
        title="Go to Future Plan" color="#384776"
        onPress={() =>
          navigation.navigate('FuturePlan', {name: 'Rati'})} />    
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