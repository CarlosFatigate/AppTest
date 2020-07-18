import Images from '../../utils/Images';
import AsyncStorage from '@react-native-community/async-storage';

const formatNumber = (
  amount: any,
  decimalCount = 2,
  decimal = ',',
  thousands = '.',
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? '-' : '';

    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)),
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;

    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : '') +
      i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : '')
    );
  } catch (e) {
    console.log(e);
  }
};

const historic = [
  {
    id: 1,
    name: 'Anderson Santos',
    phone: '(11) 98456-8745',
    avatar: Images.johnDoe,
    value: 'R$ ' + formatNumber(24),
    date: '2020-01-02T14:25:37.55',
  },
  {
    id: 2,
    name: 'Bianca Gente Fina',
    phone: '(11) 98654-7852',
    avatar: Images.unnamed,
    value: 'R$ ' + formatNumber(123.5),
    date: '2020-01-20T14:25:37.55',
  },
  {
    id: 3,
    name: 'Débora Pomposa',
    phone: '(11) 96871-3251',
    avatar: null,
    value: 'R$ ' + formatNumber(240),
    date: '2020-03-12T14:25:37.55',
  },
  {
    id: 4,
    name: 'Derlene da Terra',
    phone: '(19) 96871-8523',
    avatar: Images.unnamed,
    value: 'R$ ' + formatNumber(13450000000.68),
    date: '2020-03-19T14:25:37.55',
  },
  {
    id: 5,
    name: 'Fabiana Casca Grossa da Santa Maria de Lourdes',
    phone: '(19) 96871-8523',
    avatar: Images.johnDoe,
    value: 'R$ ' + formatNumber(28),
    date: '2020-03-25T14:25:37.55',
  },
  {
    id: 6,
    name: 'Francisca Sabida',
    phone: '(19) 98456-8745',
    avatar: Images.unnamed,
    value: 'R$ ' + formatNumber(345.09),
    date: '2020-04-08T14:25:37.55',
  },
  {
    id: 7,
    name: 'Gerson Mariano',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe2,
    value: 'R$ ' + formatNumber(257.59),
    date: '2020-05-13T14:25:37.55',
  },
  {
    id: 8,
    name: 'Sabina dos Santos',
    phone: '(19) 98456-8745',
    avatar: null,
    value: 'R$ ' + formatNumber(2302.23),
    date: '2020-05-22T14:25:37.55',
  },
  {
    id: 9,
    name: 'Anderson de Marte',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe3,
    value: 'R$ ' + formatNumber(123.87),
    date: '2020-07-07T14:25:37.55',
  },
  {
    id: 10,
    name: 'Carlos Alberto',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe4,
    value: 'R$ ' + formatNumber(255.87),
    date: '2020-07-17T14:25:37.55',
  },
  {
    id: 11,
    name: 'Vanderlei Santos',
    phone: '(11) 98456-8745',
    avatar: Images.johnDoe,
    value: 'R$ ' + formatNumber(24),
    date: '2020-01-02T14:25:37.55',
  },
  {
    id: 12,
    name: 'Roberto Gente Fina',
    phone: '(11) 98654-7852',
    avatar: Images.johnDoe3,
    value: 'R$ ' + formatNumber(123.5),
    date: '2020-01-20T14:25:37.55',
  },
  {
    id: 13,
    name: 'Bianca Pomposa',
    phone: '(11) 96871-3251',
    avatar: null,
    value: 'R$ ' + formatNumber(240),
    date: '2020-03-12T14:25:37.55',
  },
  {
    id: 14,
    name: 'Cristian da Terra',
    phone: '(19) 96871-8523',
    avatar: Images.johnDoe,
    value: 'R$ ' + formatNumber(1345.68),
    date: '2020-03-19T14:25:37.55',
  },
  {
    id: 15,
    name: 'Mario Grossa da Santa de Lourdes',
    phone: '(19) 96871-8523',
    avatar: Images.johnDoe4,
    value: 'R$ ' + formatNumber(28),
    date: '2020-03-25T14:25:37.55',
  },
  {
    id: 16,
    name: 'Lurdes Sabida',
    phone: '(19) 98456-8745',
    avatar: Images.unnamed,
    value: 'R$ ' + formatNumber(345.09),
    date: '2020-04-08T14:25:37.55',
  },
  {
    id: 17,
    name: 'Ricardo Mariano',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe2,
    value: 'R$ ' + formatNumber(257.59),
    date: '2020-05-13T14:25:37.55',
  },
  {
    id: 18,
    name: 'João dos Santos',
    phone: '(19) 98456-8745',
    avatar: null,
    value: 'R$ ' + formatNumber(2302.23),
    date: '2020-05-22T14:25:37.55',
  },
  {
    id: 19,
    name: 'Joaquim de Marte',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe4,
    value: 'R$ ' + formatNumber(123.87),
    date: '2020-07-07T14:25:37.55',
  },
  {
    id: 20,
    name: 'Cristiano Amaro',
    phone: '(19) 98456-8745',
    avatar: Images.johnDoe,
    value: 'R$ ' + formatNumber(255.87),
    date: '2020-07-17T14:25:37.55',
  },
];

const getHistoric = async () => {
  try {
    const token = await AsyncStorage.getItem('@TOKEN');
    return historic;
  } catch (error) {
    throw error;
  }
 
};

const getChartValues = async (contacts: Array<any>) => {
  let values = Array();

  await contacts.forEach(
    (
      item: {
        id: string;
        name: string;
        phone: string | null;
        avatar: boolean;
        value: any;
      },
      key: number,
    ) => {
      values.push({name:item.name, image:item.avatar ,label: key, value:parseFloat(
        item.value.replace('R$ ', '').replace('.', '').replace(',', '.'),)}
        ,
      );
    },
  );
  return values;
};

export default {
  getHistoric,
  getChartValues,
};
