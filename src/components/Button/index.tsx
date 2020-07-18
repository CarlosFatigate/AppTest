import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import StylesBtn from './style';

interface Props {
  label: string;
  onPress: () => any;
}

const Button = (props: Props) => (
  <TouchableOpacity style={StylesBtn.btnBox} onPress={props.onPress}>
    <Text style={StylesBtn.label}>{props.label}</Text>
  </TouchableOpacity>
);

export default Button;
