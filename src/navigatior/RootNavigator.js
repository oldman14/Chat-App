import React, {useState, useContext} from 'react';
import {View, Text} from 'react-native';
import MainStack from './Main_Stack';
import {NavigationContainer} from '@react-navigation/native';
import Auth_Stack from './Auth_Stack';
import {AuthContext} from '../navigatior/AuthProvider';

const RootNavigator = () => {
  const {isAuth} = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isAuth ? <MainStack /> : <Auth_Stack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
