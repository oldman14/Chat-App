import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FloatingLabelInput} from 'react-native-floating-label-input';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';
import AddFriendList from '../../component/AddFriendList';
// import {SearchBar} from 'react-native-elements';
const FriendScreen = () => {
  const [searchName, setSearchName] = useState('');
  const [addFriend, setAddFriend] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const userId = auth().currentUser.uid;

  useEffect(() => {
    const user = 'PHS7Hirww6TPpb3AZmGTS4IfadW2';
    const onValueChange = database()
      .ref(`/users/`)
      .on('value', (snapshot) => {
        let items = [];
        snapshot.forEach((element) => {
          console.log('Clg', element.val());
          let item = {
            // _key: element.key,
            // userName: element.val().userName,
            // email: element.val().email,
          };
          // items.push(item);
        });
        // setFriendList(items);
      });
    // Stop listening for updates when no longer required
    return () => database().ref(`/user/`);
  }, []);
  console.log(' friendlist', friendList);
  const searchFriend = () => {
    let i;
    let items = [];
    for (i = 0; i < friendList.length; i++) {
      if (friendList[i].userName == searchName) {
        let item = {
          _key: friendList[i]._key,
          userName: friendList[i].userName,
          email: friendList[i].email,
        };
        items.push(item);
      }
    }
    setAddFriend(items);
  };
  console.log(addFriend);
  // const searchFriend = () => {
  //   friendList.map((item) => {
  //     console.log('item', item);
  //   });
  // };

  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <TextInput
          style={styles.inputText}
          placeholder="Nhấn tìm bạn"
          value={searchName}
          onChangeText={(text) => setSearchName(text)}></TextInput>
        <View style={styles.searchView}>
          <TouchableOpacity
            style={styles.searchBox}
            onPress={() => searchFriend()}>
            <Text>Tim</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View>
        {friendList.map((item) => {
          <View style={{backgroundColor: 'red', flex: 1}}>
            <Text>{item.userName}</Text>
            <Text>{item.email}</Text>
          </View>;
        })}
      </View> */}
      <View style={styles.listFriend}>
        <FlatList
          data={addFriend}
          renderItem={({item}) => <AddFriendList friendList={item} />}
          keyExtractor={(item) => String(item._key)}></FlatList>
      </View>

      <FlatList
        data={friendList}
        renderItem={({item}) => <AddFriendList friendList={item} />}
        keyExtractor={(item) => String(item._key)}></FlatList>
    </View>
  );
};

export default FriendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  searchBox: {
    backgroundColor: 'orange',
    flexDirection: 'row',
  },
  inputText: {
    width: '80%',
    backgroundColor: 'white',
  },
  searchView: {},
  buttonSearch: {
    padding: 20,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFriend: {
    flex: 1,
    backgroundColor: 'orange',
  },
  listFriend: {
    marginVertical: 5,
  },
});
