import AsyncStorage from '@react-native-community/async-storage';

const sendMoney = async (ClienteId: string, valor: number) => {
  try {
    const token = await AsyncStorage.getItem('@TOKEN');
    return true;
  } catch (error) {
    throw error;
  }
};

export default {
  sendMoney,
};
