import {StyleSheet} from 'react-native';

const StylesContact = StyleSheet.create({
  name: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0,
    textAlign: "center"
  },
  phone: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 18,
    margin: 0,
    textAlign: "center"
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth:2,
    borderColor: '#00a6a8',
    justifyContent:'center',
    alignSelf:"center"
  },
  initals: {
    color: '#00a6a8',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
  },
});

export default StylesContact;
