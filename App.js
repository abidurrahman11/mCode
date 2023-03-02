import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Cscreen from './screens/Cscreen';
import About from './screens/About';


function Ccompiler() {
  return <Cscreen url={'https://www.mycompiler.io/new/c'} />;
}

function Cppcompiler() {
  return <Cscreen url={'https://www.programiz.com/cpp-programming/online-compiler/'} />;
}

function Pycompiler() {
  return <Cscreen url={'https://www.mycompiler.io/new/python'} />;
}

function Webcompiler() {
  return <Cscreen url={'https://playcode.io/new'} />;
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'C') {
              iconName = 'language-c';
            } else if (route.name === 'C++') {
              iconName = 'language-cpp';
            } else if (route.name == 'Python') {
              iconName = 'language-python';
            } else if (route.name === 'Web') {
              iconName = 'language-javascript';
            } else if (route.name == 'Info') {
              iconName = 'information-outline';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="C" component={Ccompiler} />
        <Tab.Screen name="C++" component={Cppcompiler} />
        <Tab.Screen name="Python" component={Pycompiler} />
        <Tab.Screen name="Web" component={Webcompiler} />
        <Tab.Screen name="Info" component={About} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}