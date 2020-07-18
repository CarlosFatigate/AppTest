import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import StylesTransfer from './style';
import ModalTransfer from '../ModalTransfer';
import Utils from "../../services/Utils";

interface Props {
  contact: {
    id: string;
    name: string;
    phone: string;
    avatar: any;
    value?: number;
  };
  navigation: any;
}

export default class ContactSend extends Component<Props> {
  modalTransfer: ModalTransfer | null = null;

  render() {
    const {contact, navigation} = this.props;

    return (
      <View>
        <TouchableOpacity
          onPress={() => this.modalTransfer && this.modalTransfer.show()}
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
        </TouchableOpacity>
        <ModalTransfer
          ref={(ref) => (this.modalTransfer = ref)}
          contact={contact}
          text={'Valor a enviar:'}
          navigation={navigation}
        />
      </View>
    );
  }
}
