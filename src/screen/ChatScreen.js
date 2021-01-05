// import React, {useState, useEffect} from 'react';
// import {
//   ImageBackground,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
// } from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// import styles from '../common/styles';
// import database from '@react-native-firebase/database';
// import {TouchableOpacity} from 'react-native';

// // import NodeScreen from '../screen/NodeScreen'
// const ChatScreen = () => {
//   const [dataChat, setDataChat] = useState({
//     username: 'username',
//     password: '123',
//     mess: '',
//   });
//   const [productData, setProductData] = useState([]);

//   useEffect(() => {
//     const onValueChange = database()
//       .ref(`/chatdata/`)
//       .once('value')
//       .then((snapshot) => {
//         let items = [];
//         snapshot.forEach((element) => {
//           let item = {
//             _key: element.key,
//             name: element.val().username,
//             pass: element.val().password,
//             mess: element.val().mess,
//           };
//           //   console.log(item)
//           items.push(item);
//         });
//         setProductData(items);
//       });
//     return;
//   });

//   const insertData = () => {
//     console.log(dataChat);
//     var hours = new Date().getHours(); //To get the Current Hours
//     var min = new Date().getMinutes(); //To get the Current Minutes

//     const newReference = database().ref('/chatdata').push(dataChat);
//   };
//   return (
//     <View style={{...styles.container}}>
//       <ImageBackground
//         imageStyle={{opacity: 0.4}}
//         style={{...styles.imgBackground}}>
//         <FlatList
//           data={productData}
//           keyExtractor={(item) => String(item._key)}
//           renderItem={({item}) => (
//             <_renderChatLine newsItem={item} />
//           )}></FlatList>
//       </ImageBackground>
//       <View style={{flex: 1 / 10}}>
//         <View style={styles.chatTextboxView}>
//           <View style={{flex: 8 / 10}}>
//             <TextInput
//               placeholder="Typing..."
//               value={dataChat.mess}
//               onChangeText={(text) => setDataChat({...dataChat, mess: text})}
//               style={{height: 100, fontSize: 18}}
//             />
//           </View>
//           <View style={{flex: 2 / 10}}>
//             <TouchableOpacity onPress={() => insertData()}>
//               <Text style={styles.touchText}>Send</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
// const _renderChatLine = (props) => {
//   // console.log(props.newsItem.mess)
//   if (props.newsItem.name == 'username') {
//     return (
//       <View style={{alignItems: 'flex-end'}}>
//         <NodeScreen
//           sender="You"
//           colorBox="colorBox1"
//           chatContent={props.newsItem.mess}
//         />
//       </View>
//     );
//   }
//   return (
//     <View>
//       <NodeScreen
//         sender={props.newsItem.name}
//         colorBox="colorBox2"
//         chatContent={props.newsItem.mess}
//       />
//     </View>
//   );
// };
// const NodeScreen = (props) => {
//   if (props.colorBox == 'colorBox1') {
//     return (
//       <View style={{...styles.chatLineView, ...styles.colorBox1}}>
//         <Text style={{...styles.itemUserName}}>{props.sender}</Text>
//         <Text style={{...styles.itemText}}>{props.chatContent}</Text>
//       </View>
//     );
//   }
//   return (
//     <View style={{...styles.chatLineView, ...styles.colorBox2}}>
//       <Text style={{...styles.itemUserName}}>{props.sender}</Text>
//       <Text style={{...styles.itemText}}>{props.chatContent}</Text>
//     </View>
//   );
// };

// export default ChatScreen;
