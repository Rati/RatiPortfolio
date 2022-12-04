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
      <Tab.Navigator
      screenOptions={({route})=> ({
        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if(route.name === 'RatiHome'){
            iconName = focused ? 'home-outline' : 'home-sharp';
          } else if(route.name === 'AboutMe') {
            iconName = focused ? 'woman-outline' : 'woman-sharp';
          } else if(route.name === 'Hobbies') {
            iconName = focused ? 'musical-note' : 'musical-note-outline';
          } else if(route.name === 'Skills') {
            iconName = focused ? 'bulb' : 'bulb-outline';
          } else if(route.name === 'FuturePlan') {
            iconName = focused ? 'stopwatch' : 'stopwatch-outline';
          }
          return <Ionic name={iconName} size={size} colour={colour} />;
        },
      })}>
      <Tab.Screen name="RatiHome" component={RatiHomeScreen} />
        <Tab.Screen name="AboutMe" component={AboutMeScreen} />
        <Tab.Screen name="Hobbies" component={HobbiesScreen} />
        <Tab.Screen name="Skills" component={SkillsScreen} />
        <Tab.Screen name="FuturePlan" component={FuturePlanScreen} />
      </Tab.Navigator>
      
    </NavigationContainer>
     
  );
}