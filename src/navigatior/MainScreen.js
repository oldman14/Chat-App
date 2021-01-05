import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FriendScreen from '../screen/mainscreen/FriendScreen';
import ProfileScreen from '../screen/mainscreen/ProfileScreen';
import ChatRoomScreen from '../screen/mainscreen/ChatRoomScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      activeColor="black"
      inactiveColor="silver"
      barStyle={{backgroundColor: '#fff'}}
      // screenOptions={({route}) => ({
      //   tabBarLabel: ({focused, color, size}) => {
      //     if (route.name === 'ChatRoomScreen') {
      //       iconName = 'ChatRoomScreen';
      //     } else if (route.name === 'FriendScreen') {
      //       iconName = 'FriendScreen';
      //     } else {
      //       iconName = 'ProfileScreen';
      //     }
      //     return
      //   },
      // })}
    >
      <Tab.Screen
        name="ChatRoomScreen"
        component={ChatRoomScreen}
        options={{
          title: 'ChatRoom',
          tabBarLabel: 'ChatRoom',
          tabBarIcon: ({color}) => (
            <MaterialIcons color={color} name="message" size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="FriendScreen"
        component={FriendScreen}
        options={{
          title: 'Friend',
          tabBarIcon: ({color}) => (
            <MaterialIcons color={color} name="group" size={22} />
          ),
        }}
      />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
