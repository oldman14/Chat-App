import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const ChatNode = (props) => {
  const messages = props.message;
  const currentUser = auth().currentUser.uid;
  const [dataChat, setData] = useState();
  const isCheckUser = () => {
    return messages.uid == currentUser;
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messages,
          {
            backgroundColor: isCheckUser() ? 'orange' : 'white',
            marginRight: isCheckUser() ? 0 : 50,
            marginLeft: isCheckUser() ? 50 : 0,
          },
        ]}>
        {!isCheckUser() && <Text style={styles.name}>{messages.username}</Text>}
        <Text style={styles.content}>{messages.content}</Text>
        <Text style={styles.time}>
          {moment(messages.createdAt).startOf('day').fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default ChatNode;
const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  messages: {
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 5,
  },
  content: {padding: 5},
  name: {fontWeight: 'bold', marginBottom: 5},
  time: {alignSelf: 'flex-end'},
});
