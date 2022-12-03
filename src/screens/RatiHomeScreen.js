import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from 'react-native';
import MyButton from '../components/MyButton';

export default function RatiHomeScreen({ navigation }) {
  
  
    return (
      <View style={styles.container}>
        <MyButton details= "click button"></MyButton>
        <Button title= "Rati Home" color="#C785D1" >
  
        </Button>
        <Text> RatiHomeScreen page</Text>
        <Button
        title="Go to About Me" color="#C785D1"
        onPress={() =>
          navigation.navigate('AboutMe', {name: 'Rati'})} />
        <Button
        title="Go to Hobbies" color="#C785D1"
        onPress={() =>
          navigation.navigate('Hobbies', {name: 'Rati'})} />
        <Button
        title="Go to Skills" color="#C785D1"
        onPress={() =>
          navigation.navigate('Skills', {name: 'Rati'})} />
        <Button
        title="Go to Future Plan" color="#C785D1"
        onPress={() =>
          navigation.navigate('FuturePlan', {name: 'Rati'})} />    
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