import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../../navigatior/AuthProvider';

const ProfileScreen = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!');
        setIsAuth(false);
      });
  };
  return (
    <View>
      <TouchableOpacity
        style={{width: '100%', height: 50}}
        onPress={() => {
          signOut();
        }}>
        <Text>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
