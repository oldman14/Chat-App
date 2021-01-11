import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import ChatListItem from '../../component/ChatListItem';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const ChatRoomScreen = ({navigation}) => {
  const [chatRoom, setChatRoom] = useState([]);
  const user = auth().currentUser.uid;

  useEffect(() => {
    const onValueChange = database()
      .ref(`/chatRoom/${user}/`)
      .on('value', (snapshot) => {
        let items = [];
        snapshot.forEach((element) => {
          let item = {
            _key: element.key,
            idChat: element.val().id,
            name: element.val().user.name,
            imageUri: element.val().user.imageUri,
            lastMessage: element.val().lastMessage,
          };
          items.push(item);
        });
        setChatRoom(items);
      });
    // Stop listening for updates when no longer required
    return () => database().ref(`/user/`);
  }, []);
  return (
    <View>
      <FlatList
        data={chatRoom}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item._key}></FlatList>
    </View>
  );
};

export default ChatRoomScreen;
