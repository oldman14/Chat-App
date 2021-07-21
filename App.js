import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthProvider from './src/navigatior/AuthProvider';
import RootNavigator from './src/navigatior/RootNavigator';
export default function App() {
  const Stack = createStackNavigator();
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}
