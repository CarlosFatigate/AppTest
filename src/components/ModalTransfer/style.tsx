import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

const StylesModal = StyleSheet.create({
  container: {
    backgroundColor: '#39586a',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  label: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    marginTop: 25,
  },
  labelReject: {
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  inputBox: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    fontSize: 50,
    padding: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#00a6a8',
    borderRadius: 20,
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 8,
  },
  feedbackImage: {
    width: 60,
    height: 60,
    marginTop: 10,
    alignSelf: 'center',
  },
  success:{
    fontSize: 16,
    color: 'green',
    marginTop: 8,
  }
});

export default StylesModal;
