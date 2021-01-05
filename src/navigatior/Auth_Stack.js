import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Sign_up from '../screen/Sign_Up';
import Sign_In from '../screen/Sign_In';

const Stack = createStackNavigator();

const Auth_Stack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sign_In"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Sign_In" component={Sign_In} />
      <Stack.Screen name="Sign_Up" component={Sign_up} />
    </Stack.Navigator>
  );
};

export default Auth_Stack;
