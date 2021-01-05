import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  imgBackground: {
    flex: 9 / 10,
    backgroundColor: '#f2f2f2',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  chatTextboxView: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 2
  },
  touchText: {
    color: '#0099ff',
    fontSize: 14
  },
  chatLineView: {
    flex: 1,
    flexDirection: 'column',
    width: '50%',
    alignItems: 'flex-start',
    padding: 8,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom : 10,
    marginTop : 10,
    marginLeft : 5,
    marginRight : 5
  },
  colorBox1: {
      backgroundColor: 'orange'
  },
  colorBox2: {
    backgroundColor: 'white'
},
  itemUserName: {
    color:"#3399ff",
    padding:5,
    fontSize:14
  },
  itemText: {
    color:"#000000",
    padding:5,
    fontSize:14
  },
  inputIcon:{
        width:26,
        height:26,
        tintColor:'#ffffff',
        marginRight:5,
        justifyContent: 'center'
  },
  button:{
	height:46,
	width: 50,
	borderRadius:10,
	marginRight:20,
	backgroundColor:'#0082c8',
	justifyContent:'center',
	alignItems:'center'
  },

});

export default styles;