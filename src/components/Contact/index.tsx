import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';
import StylesTransfer from './style';
import Utils from "../../services/Utils";

interface Props {
  contact: {
    id: string;
    name: string;
    phone: string;
    avatar: any;
    value?: number;
  };
}

export default class Contact extends Component<Props> {
  render() {
    const {contact} = this.props;

    return (
      <View>
        <View
          style={StylesTransfer.card}>
          {contact.avatar ? (
            <Image style={StylesTransfer.avatar} source={contact.avatar} />
          ) : (
            <View style={StylesTransfer.avatar}>
              <Text style={StylesTransfer.initals}>
                {Utils.getInitials(contact.name)}
              </Text>
            </View>
          )}
          <View style={{padding: 20, width:'90%'}}>
            <Text style={StylesTransfer.name}>{contact.name}</Text>
            <Text style={StylesTransfer.phone}>{contact.phone}</Text>
            {contact.value ? (
              <Text style={StylesTransfer.phone}>{contact.value}</Text>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}
