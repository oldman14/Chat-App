import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment';

const ChatNode = (props) => {
  const messages = props.message;
  const isCheckUser = () => {
    return messages.user.id == 'u1';
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
        {!isCheckUser() && (
          <Text style={styles.name}>{messages.user.name}</Text>
        )}
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
