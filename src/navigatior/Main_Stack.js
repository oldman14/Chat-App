import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MainScreen from './MainScreen';
import ChatScreen from '../screen/mainscreen/ChatScreen';
import ChatListItem from '../component/ChatListItem';
import ChatNode from '../screen/mainscreen/ChatNode';
import FriendScreen from '../screen/mainscreen/FriendScreen';
import Screen_Name from '../screen/Screen_Name';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={({route}) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <MaterialIcons name="call" size={22} />
              <FontAwesome
                style={{paddingHorizontal: 10}}
                name="video-camera"
                size={22}
              />
              <MaterialCommunityIcons name="dots-vertical" size={22} />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="MainScreen"
        // screenOptions={{
        //   headerShown: false,
        // }}
        options={() => ({
          headerShown: false,
        })}
        component={MainScreen}
      />
      <Stack.Screen name="ChatListItem" component={ChatListItem} />
      <Stack.Screen name="ChatNode" component={ChatNode} />
      <Stack.Screen name="Screen_Name" component={Screen_Name} />
    </Stack.Navigator>
  );
};

export default MainStack;
