import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {ToastAndroid} from 'react-native';
import {set} from 'react-native-reanimated';

const Sign_up = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cfPassword, setCfPassword] = useState('');
  const [user, setUser] = useState({
    email: '',
    id: '',
  });
  // const insertUser = (user) => {
  //   const newReference = database().ref('/user').push(user);
  // };
  const Register = (email, password) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const userAuth = auth().currentUser;
        database().ref(`/user/${userAuth.uid}`).set({
          email: userAuth.email,
          uid: userAuth.uid,
          userName: cfPassword,
        });
        ToastAndroid.show('Đăng ký thành công', ToastAndroid.LONG);
        console.log('User account crea ted & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          ToastAndroid.show('Đăng ký thành công', ToastAndroid.LONG);
        }

        console.error(error);
      });
  };
  // const insertData = () => {
  //   const newReference = database().ref(`/chatdata1 + ${}`).push('dataChat');
  // };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../images/Group.png')}></Image>
      </View>
      <View style={styles.inputView}>
        <FloatingLabelInput
          label="Email"
          value={email}
          hintTextColor={'white'}
          onChangeText={(val) => setEmail(val)}
          containerStyles={{
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            borderColor: 'grey',
            borderRadius: 8,
          }}
          customLabelStyles={{
            colorFocused: 'red',
            fontSizeFocused: 12,
          }}
          labelStyles={
            {
              // paddingBottom: 5,
            }
          }
          inputStyles={{
            color: 'white',
            paddingTop: 20,
            fontSize: 18,
          }}></FloatingLabelInput>
        <FloatingLabelInput
          label="Password"
          value={password}
          hintTextColor={'white'}
          onChangeText={(val) => setPassword(val)}
          containerStyles={{
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            borderColor: 'grey',
            borderRadius: 8,
          }}
          customLabelStyles={{
            colorFocused: 'red',
            fontSizeFocused: 12,
          }}
          labelStyles={
            {
              // paddingBottom: 5,
            }
          }
          inputStyles={{
            color: 'white',
            paddingTop: 20,
            fontSize: 18,
          }}></FloatingLabelInput>
        <FloatingLabelInput
          label="Username"
          value={cfPassword}
          hintTextColor={'white'}
          onChangeText={(val) => setCfPassword(val)}
          containerStyles={{
            borderBottomWidth: 1,
            paddingHorizontal: 10,
            borderColor: 'grey',
            borderRadius: 8,
          }}
          customLabelStyles={{
            colorFocused: 'red',
            fontSizeFocused: 12,
          }}
          labelStyles={
            {
              // paddingBottom: 5,
            }
          }
          inputStyles={{
            color: 'white',
            paddingTop: 20,
            fontSize: 18,
          }}></FloatingLabelInput>
      </View>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => Register(email, password)}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sign_up;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  inputView: {
    paddingHorizontal: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'red',
    alignItems: 'center',
  },
  inputText: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'grey',
    color: 'white',
    marginVertical: 10,
  },
  registerButton: {
    margin: 20,
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
  },
});
