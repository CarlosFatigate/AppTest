import React from 'react';
import {View, Text, Image} from 'react-native';
import StylesContact from './style';
import Utils from "../../services/Utils";

interface Props {
  contact: {
    id: number;
    name: string;
    phone: string;
    avatar: any;
  };
}

const ContactCard = (props: Props) => (
  <View>
    {props.contact.avatar ? (
      <Image style={StylesContact.avatar} source={props.contact.avatar} />
    ) : (
      <View style={StylesContact.avatar}>
        <Text style={StylesContact.initals}>
          {Utils.getInitials(props.contact.name)}
        </Text>
      </View>
    )}
    <Text style={StylesContact.name}>{props.contact.name}</Text>
    <Text style={StylesContact.phone}>{props.contact.phone}</Text>
  </View>
);

export default ContactCard;
