import moment from 'moment';
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
const ChatListItem = (props) => {
  const navigation = useNavigation();
  const onClick = () => {
    navigation.navigate('ChatScreen', {
      id: props.chatRoom._key,
      name: props.chatRoom.users.name,
    });
  };
  return (
    <TouchableOpacity onPress={() => onClick()}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.imageUser}
            source={{uri: props.chatRoom.user.imageUri}}></Image>
          <View style={styles.midContainer}>
            <Text style={styles.userName}>{props.chatRoom.user.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>
              {props.chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.timetamp}>
          {moment(props.chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListItem;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
  },
  midContainer: {
    justifyContent: 'space-around',
  },
  imageUser: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
    width: 180,
  },
  timetamp: {
    color: 'grey',
  },
});
