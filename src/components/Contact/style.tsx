import {StyleSheet} from 'react-native';

const StylesTransfer = StyleSheet.create({
  name: {
    color: '#00a6a8',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0,
  },
  phone: {
    color: '#17757e',
    textTransform: 'uppercase',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 0,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 75,
    borderWidth:2,
    borderColor: '#00a6a8',
    justifyContent:'center'
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: '#00a6a8'
  },
  initals: {
    color: '#00a6a8',
    textTransform: 'uppercase',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 0,
    textAlign:"center"
  }
});

export default StylesTransfer;
