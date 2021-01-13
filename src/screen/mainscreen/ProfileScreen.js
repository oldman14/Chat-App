import React, {useContext} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import {AuthContext} from '../../navigatior/AuthProvider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
  const url = 'https://www.w3schools.com/w3images/photographer.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.leftContainer}>
          <Image style={styles.imageUser} source={{uri: url}}></Image>
          <View style={styles.midContainer}>
            <Text style={styles.userName}>Duonghx</Text>
            <Text>Bấm vào để xem trang cá nhân  </Text>
          </View>
        </View>
      </View>
      <View style={styles.account}>
        <TouchableOpacity>
          <MaterialCommunityIcons name="shield-outline" size={22} />

          <Text>Tài khoản và bảo mật</Text>
        </TouchableOpacity>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'silver',
  },
  profileContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  imageUser: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
