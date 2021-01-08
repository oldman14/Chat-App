import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ChatListItem from '../../component/ChatListItem';

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
  const insertData = () => {
    for (i = 0; i++; i <= DATA.length()) {
      let item = DATA[i].id;
      database().ref(`/users/${item}`).set({});
    }
  };
  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}></FlatList>
    </View>
  );
};

export default ChatRoomScreen;

const Cat = () => {
  console.log('I am Cat');
  return (
    <View>
      <Text>I am also a cat!</Text>
    </View>
  );
};
