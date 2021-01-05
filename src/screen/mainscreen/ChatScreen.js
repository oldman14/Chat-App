import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ChatNode from './ChatNode';
import auth from '@react-native-firebase/auth';

const ChatScreen = ({route}) => {
  const dataMessages = {
    id: '1',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
      },
      {
        id: 'u2',
        name: 'Lukas',
        imageUri:
          'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
      },
    ],
    messages: [
      {
        id: 'm1',
        content: 'How are you, Lukas!',
        createdAt: '2020-12-29T12:48:00.000Z',
        user: {
          id: 'u1',
          name: 'Vadim',
        },
      },
      {
        id: 'm2',
        content: 'I am good, good',
        createdAt: '2020-12-29T14:49:00.000Z',
        user: {
          id: 'u2',
          name: 'Lukas',
        },
      },
      {
        id: 'm3',
        content: 'What about you?',
        createdAt: '2020-12-29T14:49:40.000Z',
        user: {
          id: 'u2',
          name: 'Lukas',
        },
      },
      {
        id: 'm4',
        content: 'Good as well, preparing for the stream now.',
        createdAt: '2020-12-29T14:50:00.000Z',
        user: {
          id: 'u1',
          name: 'Vadim',
        },
      },
      {
        id: 'm5',
        content: 'How is your uni going?',
        createdAt: '2020-12-29T14:51:00.000Z',
        user: {
          id: 'u1',
          name: 'Vadim',
        },
      },
      {
        id: 'm6',
        content:
          'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
        createdAt: '2020-12-29T14:49:00.000Z',
        user: {
          id: 'u2',
          name: 'Lukas',
        },
      },
      {
        id: 'm7',
        content:
          'Big Data is really interesting. Cannot wait to go through all the material.',
        createdAt: '2020-12-29T14:53:00.000Z',
        user: {
          id: 'u1',
          name: 'Vadim',
        },
      },
    ],
  };

  const [messages, setMessages] = useState('');
  const {id} = route.params;
  const user = auth().currentUser;
  const userId = auth().currentUser.uid;
  console.log(userId);
  user.providerData.forEach((userInfo) => {
    console.log('User info for provider: ', userInfo);
  });
  const sendMessages = () => {
    console.log(messages);
    setMessages('');
  };
  const isFillText = () => {
    return messages == '';
  };
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <FlatList
          data={dataMessages.messages}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => <ChatNode message={item} />}
          inverted></FlatList>
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
  imageIcon: {
    flexDirection: 'row',
  },
});
