import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatNode from './ChatNode';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {set} from 'react-native-reanimated';
const ChatScreen = ({route, props}) => {
  const [messages, setMessages] = useState('');
  const {idRoom, name, imageUri, guestId} = route.params;
  console.log('CLg guestId', guestId);
  const [chatData, setChatData] = useState([]);
  const user = auth().currentUser;
  const [userData, setUserData] = useState([]);
  if (user.uid > guestId) {
    var idRoomNew = user.uid + guestId;
  } else {
    var idRoomNew = guestId + user.uid;
  }
  useEffect(() => {
    database()
      .ref(`/dataChat/${idRoomNew}/messages/`)
      .on('value', (snapshot) => {
        let items = [];
        snapshot.forEach((element) => {
          let item = {
            _key: element.key,
            username: element.val().username,
            uid: element.val().uid,
            content: element.val().content,
            createdAt: element.val().createdAt,
          };
          items.push(item);
        });
        setChatData(items);
      });
    return () => {};
  }, []);
  useEffect(() => {
    let items = [];
    database()
      .ref(`/user/${user.uid}`)
      .on('value', (snapshot) => {
        setUserData({
          imageUri: snapshot.val().imageUri,
          username: snapshot.val().userName,
        });
      });
    return () => {};
  }, []);
  // const idRoomNew = () =>user.uid + guestId;
  const sendMessages = () => {
    database().ref(`/dataChat/${idRoomNew}/messages/`).push({
      username: userData.username,
      content: messages,
      uid: user.uid,
      createdAt: '2020-12-29T12:48:00.000Z',
    });
    setMessages('');
    sendLastMessages();
    currentMess();
  };
  const sendLastMessages = () => {
    database()
      .ref(`/chatRoom/${guestId}/${user.uid}`)
      .set({
        lastMessage: {
          username: userData.username,
          content: messages,
          uid: idRoom,
          createdAt: '2020-12-29T12:48:00.000Z',
        },
        id: idRoomNew,
        user: {
          imageUri: userData.imageUri,
          name: userData.username,
          guestId: user.uid,
        },
      });
  };
  const currentMess = () => {
    database()
      .ref(`/chatRoom/${user.uid}/${guestId}`)
      .set({
        lastMessage: {
          username: userData.username,
          content: messages,
          uid: user.uid,
          createdAt: '2020-12-29T12:48:00.000Z',
        },
        id: idRoomNew,
        user: {
          imageUri: imageUri,
          name: name,
          guestId: guestId,
        },
      });
  };
  const isFillText = () => {
    return messages == '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <FlatList
          style={styles.flatlistStyle}
          inverted
          data={chatData.reverse()}
          keyExtractor={(item) => item._key}
          renderItem={({item}) => <ChatNode message={item} />}></FlatList>
      </View>
      <View style={styles.messageContainer}>
        <MaterialCommunityIcons
          style={styles.emoticon}
          name="emoticon-devil-outline"
          size={26}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Your text"
          onChangeText={(text) => setMessages(text)}
          value={messages}
          multiline></TextInput>
        {isFillText() ? (
          <View style={styles.imageIcon}>
            <MaterialCommunityIcons
              style={styles.sendIcon}
              name="dots-horizontal"
              color="black"
              size={26}
            />
            <MaterialCommunityIcons
              style={styles.sendIcon}
              name="image"
              size={26}
            />
          </View>
        ) : (
          <TouchableOpacity onPress={() => sendMessages()}>
            <MaterialCommunityIcons
              style={styles.sendIcon}
              color="black"
              name="send"
              size={26}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  messageContainer: {flexDirection: 'row'},
  inputText: {
    flex: 1,
  },
  emoticon: {
    paddingLeft: 10,
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  sendIcon: {
    padding: 5,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  chatContent: {
    flex: 1,
    backgroundColor: 'silver',
  },
  flatlistStyle: {
    alignContent: 'flex-end',
  },
  imageIcon: {
    flexDirection: 'row',
  },
});
