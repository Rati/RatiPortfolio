import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from 'react-native';
import MyButton from '../components/MyButton';

export default function RatiHomeScreen({ navigation }) {
  
  
    return (
      <View style={styles.container}>
        <MyButton details= "click button"></MyButton>
        <Button title= "details" color="#C785D1" >
  
        </Button>
        <Text> RatiHomeScreen page</Text>
        <Button
        title="Go to About Me" color="#D56A9B"
        onPress={() =>
          navigation.navigate('AboutMe', {name: 'Rati'})
        }
      />
        <StatusBar style="auto" />
      </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E1D9DD',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });