import React, {useState, useContext, useEffect} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../../src/navigatior/AuthProvider';
// import {set} from 'react-native-reanimated';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {isAuth, setIsAuth} = useContext(AuthContext);
  // console.log(isAuth);
  const [initialRouteName, setInitializing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);
    // console.log(user);
    // console.log(user.email);
    // if (initialRouteName) setInitializing(false);
    // if (!isAuth) setIsAuth(true);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // console.log(onAuthStateChanged);
    return subscriber;
  }, []);

  if (isAuth) return null;

  const login = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsAuth(true);
        // onAuthStateChanged();
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 0.8,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../images/Group.png')}></Image>
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'space-around',
          paddingHorizontal: 30,
        }}>
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
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          paddingHorizontal: 30,
        }}>
        <Text style={{flex: 0.2, alignSelf: 'flex-end', color: 'red'}}>
          Forgot password
        </Text>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
            marginVertical: 30,
          }}>
          <TouchableOpacity
            style={styles.touchableLogin}
            onPress={() => login(email, password)}>
            <Text style={{color: '#ABB4BD', fontSize: 18}}>Login</Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', color: 'white'}}>or</Text>
          <View style={styles.socialContaner}>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="facebook" size={22} />
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <MaterialCommunityIcons name="google" size={22} />
              <Text>Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.touchableRegister}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Sign_Up');
          }}>
          <Text style={styles.textRegister}>Create a new account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    color: 'red',
    backgroundColor: '#000',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '100%',
  },
  socialContaner: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    padding: 5,
    flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  touchableLogin: {
    backgroundColor: 'grey',
  },
  touchableRegister: {
    alignItems: 'center',
    flex: 0.1,
  },
  textRegister: {
    color: 'white',
  },
});
