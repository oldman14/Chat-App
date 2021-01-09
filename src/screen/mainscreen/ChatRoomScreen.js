import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import ChatListItem from '../../component/ChatListItem';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const ChatRoomScreen = ({navigation}) => {
  const DATA = [
    {
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
      lastMessage: {
        id: 'm1',
        content:
          'Well done this sprint, guys! Something text. Something la la la ',
        createdAt: '2020-10-03T14:48:00.000Z',
      },
    },
    {
      id: '2',
      users: [
        {
          id: 'u1',
          name: 'Vadim',
          imageUri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        },
        {
          id: 'u3',
          name: 'Daniil',
          imageUri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.jpg',
        },
      ],
      lastMessage: {
        id: 'm2',
        content: 'How are you doing?',
        createdAt: '2020-10-02T15:40:00.000Z',
      },
    },
    {
      id: '3',
      users: [
        {
          id: 'u1',
          name: 'Vadim',
          imageUri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        },
        {
          id: 'u4',
          name: 'Alex',
          imageUri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/3.png',
        },
      ],
      lastMessage: {
        id: 'm3',
        content: 'Hi, Vadim.',
        createdAt: '2020-10-02T14:48:00.000Z',
      },
    },
    {
      id: '4',
      users: [
        {
          id: 'u1',
          name: 'Vadim',
          imageUri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        },
        {
          id: 'u5',
          name: 'Vlad',
          imageUri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/4.jpg',
        },
      ],
      lastMessage: {
        id: 'm4',
        content: 'Can you review my last merge',
        createdAt: '2020-09-29T14:48:00.000Z',
      },
    },
    {
      id: '5',
      users: [
        {
          id: 'u1',
          name: 'Vadim',
          imageUri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        },
        {
          id: 'u6',
          name: 'Elon Musk',
          imageUri:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg',
        },
      ],
      lastMessage: {
        id: 'm5',
        content: 'I would be happy',
        createdAt: '2020-09-30T14:48:00.000Z',
      },
    },
  ];
  const [chatRoom, setChatRoom] = useState([]);
  const user = auth().currentUser.uid;
  console.log(user + 'Log user');

  useEffect(() => {
    const onValueChange = database()
      .ref(`/chatRoom/${user}`)
      .on('value', (snapshot) => {
        let items = [];
        snapshot.forEach((element) => {
          // console.log('Clg user', element.val().user);
          let item = {
            _key: element.key,
            userName: element.val().user.name,
            image: element.val().user.imageUri,
          };
          items.push(element.val());
        });
        setChatRoom(items);
      });
    // Stop listening for updates when no longer required
    return () => database().ref(`/user/`);
  }, []);
  // console.log(chatRoom);
  const insertData = () => {
    DATA.map((item) => {
      database().ref(`/chatRoom/${user}/${item.id}`).set(item);
    });
  };
  return (
    <View>
      <FlatList
        data={chatRoom}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item._key}></FlatList>
      <TouchableOpacity onPress={() => insertData()}>
        <Text>insertData</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatRoomScreen;
