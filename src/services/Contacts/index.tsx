import Images from '../../utils/Images';
import AsyncStorage from '@react-native-community/async-storage';

const contacts = [
  {
    id: 1,
    name: 'Anderson Santos',
    phone: '(11) 98456-8745',
    avatar: Images.johnDoe,
  },
  {
    id: 2,
    name: 'Bianca Gente Fina',
    phone: '(11) 98654-7852',
    avatar: Images.unnamed,
  },
  {
    id: 3,
    name: 'Débora Pomposa',
    phone: '(11) 96871-3251',
    avatar: null,
  },
  {
    id: 4,
    name: 'Derlene da Terra',
    phone: '(19) 96871-8523',
    avatar: Images.unnamed,
  },
  {
    id: 5,
    name: 'Fabiana Casca Grossa da Santa Maria de Lourdes',
    phone: '(19) 96871-8523',
    avatar: Images.johnDoe,
  },
  {
    id: 6,
    name: 'Francisca Sabida',
    phone: '(19) 98456-8745',
    avatar: Images.unnamed,
  },
  {
    id: 7,
    name: 'Gerson Mariano',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe2,
  },
  {
    id: 8,
    name: 'Sabina dos Santos',
    phone: '(19) 98456-8745',
    avatar: null,
  },
  {
    id: 9,
    name: 'Anderson de Marte',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe3,
  },
  {
    id: 10,
    name: 'Carlos Alberto',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe4,
  },
  {
    id: 11,
    name: 'Vanderlei Santos',
    phone: '(11) 98456-8745',
    avatar: Images.johnDoe,
  },
  {
    id: 12,
    name: 'Roberto Gente Fina',
    phone: '(11) 98654-7852',
    avatar: Images.johnDoe3,
  },
  {
    id: 13,
    name: 'Bianca Pomposa',
    phone: '(11) 96871-3251',
    avatar: null,
  },
  {
    id: 14,
    name: 'Cristian da Terra',
    phone: '(19) 96871-8523',
    avatar: Images.johnDoe,
  },
  {
    id: 15,
    name: 'Mario Grossa da Santa de Lourdes',
    phone: '(19) 96871-8523',
    avatar: Images.johnDoe4,
  },
  {
    id: 16,
    name: 'Lurdes Sabida',
    phone: '(19) 98456-8745',
    avatar: Images.unnamed,
  },
  {
    id: 17,
    name: 'Ricardo Mariano',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe2,
  },
  {
    id: 18,
    name: 'João dos Santos',
    phone: '(19) 98456-8745',
    avatar: null,
  },
  {
    id: 19,
    name: 'Joaquim de Marte',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe4,
  },
  {
    id: 20,
    name: 'Cristiano Amaro',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe,
  },
];

const getContacts = async () => {
  try {
    const token = await AsyncStorage.getItem('@TOKEN');
    return contacts;
  } catch (error) {
    throw error;
  }
};

export default {
  getContacts,
};
