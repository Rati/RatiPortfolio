import RatiHomeScreen from './src/screens/RatiHomeScreen';
import AboutMeScreen from './src/screens/AboutMeScreen';
import HobbiesScreen from './src/screens/HobbiesScreen';
import SkillsScreen from './src/screens/SkillsScreen';
import FuturePlanScreen from './src/screens/FuturePlanScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="RatiHome" component={RatiHomeScreen} />
        <Tab.Screen name="AboutMe" component={AboutMeScreen} />
        <Tab.Screen name="Hobbies" component={HobbiesScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="FuturePlan" component={FuturePlanScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
     
  );
}