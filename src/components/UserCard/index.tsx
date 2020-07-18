import React from 'react';
import Images from '../../utils/Images';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StylesUserCard from './style';

interface Props {}

const UserCard = () => (
    <View>
        <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={['#283450', '#00fec5']}
        style={StylesUserCard.background}>
        <Image style={StylesUserCard.avatar} source={Images.johnDoe} />
      </LinearGradient>
      <Text style={StylesUserCard.name}>Carlos Alberto Fatigate Junior</Text>
      <Text style={StylesUserCard.email}>juniorfatigate@gmail.com</Text>
    </View>
);

export default UserCard;
