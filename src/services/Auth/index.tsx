import AsyncStorage from '@react-native-community/async-storage';

const getToken = async () => {
  setTimeout(async () => {
    try {
      await AsyncStorage.setItem(
        '@TOKEN',
        '1d40d305-c836-43a2-b4db-acc56bcc1393',
      );
      return true;
    } catch (error) {
      throw error;
    }
  }, 2000);
};

export default {
  getToken,
};
