import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddFriendList = (props) => {
  const friendList = props.friendList;
  console.log('Log add: ' + friendList);
  const onClick = () => {
    console.log(friendList.userName);
  };
  const url =
    'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/5.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image style={styles.imageUser} source={{uri: url}}></Image>
        <View style={styles.midContainer}>
          <Text style={styles.userName}>{friendList.userName}</Text>
          <Text>Đã gửi lời mời kết bạn</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text>Hủy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onClick()} style={styles.acceptButton}>
          <Text>Đồng ý</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddFriendList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
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
  cancelButton: {
    padding: 5,
    backgroundColor: 'silver',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  acceptButton: {
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 10,
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
