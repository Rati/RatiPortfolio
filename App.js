import RatiHomeScreen from './src/screens/RatiHomeScreen';
import AboutMeScreen from './src/screens/AboutMeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="RatiHome" component={RatiHomeScreen} />
        <Tab.Screen name="AboutMe" component={AboutMeScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
     
  );
}