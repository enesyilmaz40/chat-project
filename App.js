import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {SafeAreaView,Text} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Chats from './screens/Chats'
import Settings from './screens/Settings'
import {colors} from './config/constants'




const ChatsStack =createNativeStackNavigator();
const ChatsScreen =() =>{
  return(
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={Chats}/>
    </ChatsStack.Navigator>
  )
}
const SettingStack =createNativeStackNavigator();
const SettingsScreen = () =>{
  return(
    <SettingStack.Navigator>
      <SettingStack.Screen name="Settings" component={Settings}/>
    </SettingStack.Navigator>
  )
}

const Tabs =createBottomTabNavigator();
const TabsScreen = ()=>(
  <Tabs.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Chats') {
        iconName = focused
          ? 'chatbubbles'
          : 'chatbubbles-outline';
      } else if (route.name === 'Settings') {
        iconName = focused ? 'settings' : 'settings-outline';
      }


      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: 'gray',
  })}>
    <Tabs.Screen name ="Chats" component={ChatsScreen}/>
    <Tabs.Screen name ="Settings" component={SettingsScreen}/>
  </Tabs.Navigator>
)

const MainsStack = createNativeStackNavigator();

const App=()=> {
  return(
    <NavigationContainer>
      <MainsStack.Navigator headerMode='none'>
        <MainsStack.Screen name="Tabs" component={TabsScreen}/>
      </MainsStack.Navigator>
    </NavigationContainer>
  )
}

export default App;