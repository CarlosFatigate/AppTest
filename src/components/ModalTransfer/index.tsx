import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../Button';
import StylesModal from './style';
import ContactCard from '../ContactCard';
import {TextInputMask} from 'react-native-masked-text';
import Loader from '../../components/Loader';
import Transfer from '../../services/Transfer';
import Images from "../../utils/Images";

interface Props {
  text: string;
  contact: any;
  navigation: any;
}

interface State {
  isVisible: boolean;
  loading: boolean;
  transferValue: string;
  error: string;
  transferError: boolean;
  transferFinished: boolean;
}

export default class ModalTransfer extends Component<Props, State> {
  state = {
    isVisible: false,
    transferValue: '0',
    error: '',
    loading: false,
    transferError: false,
    transferFinished: false,
  };

  transferValueRef: TextInputMask | null = null;

  show = () => {
    this.setState({isVisible: true});
  };

  hide = () => {
    this.setState({isVisible: false});
  };

  onAccept = async () => {
    this.setState({loading: true});
    const transferValue = this.transferValueRef
      ? parseFloat(this.transferValueRef.getRawValue())
      : 0;
    if (transferValue > 0) {
      try {
        let transferResult = await Transfer.sendMoney(
          this.props.contact.id,
          transferValue,
        );
        console.log('aki', transferResult)
        if (transferResult) {
            
          this.setState({loading: false, transferFinished: true});
        } else {
          this.setState({
            transferError: true,
            transferFinished: true,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          transferError: true,
          transferFinished: true,
          loading: false,
        });
      }
      setTimeout(async () => {
        this.hide();
      }, 8000);
    } else {
      this.setState({loading: false});
      this.setState({error: 'É necesario preencher um valor.'});
    }
  };

  onReject = () => {
    this.hide();
  };

  render() {
    const {isVisible, transferValue, error, loading, transferError,transferFinished} = this.state;
    const {text, contact} = this.props;
    return (
      <Modal isVisible={isVisible}>
        <View style={StylesModal.container}>
          {!loading ? (
            <TouchableOpacity
              style={{position: 'absolute', left: 20, top: 20}}
              onPress={this.onReject}>
              <Text style={StylesModal.labelReject}>X</Text>
            </TouchableOpacity>
          ) : null}
          <ContactCard contact={contact} />
          {!transferFinished && !transferError ? (
            <Loader
              loading={loading}
              text={'Estamos processando a sua transação!'}
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={StylesModal.label}>{text}</Text>
              <View style={StylesModal.inputBox}>
                <TextInputMask
                  onChangeText={(text) => {
                    this.setState({
                      transferValue: text,
                    });
                  }}
                  // add the ref to a local var
                  ref={(ref) => (this.transferValueRef = ref)}
                  value={transferValue}
                  type={'money'}
                  style={StylesModal.input}
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$ ',
                    suffixUnit: '',
                  }}
                />
                {error ? <Text style={StylesModal.error}>{error}</Text> : null}
              </View>
              <Button label={'Enviar'} onPress={this.onAccept} />
            </Loader>
          ) : null}
          {transferFinished && !transferError ? (
              <View>
                  <Image source={Images.check} style={StylesModal.feedbackImage} />
                  <Text style={StylesModal.success}>Dinheiro enviado com sucesso!!</Text>
              </View>
          ):null}
          {transferFinished && transferError ? (
              <View>
                  <Image source={Images.close} style={StylesModal.feedbackImage}/>
                  <Text style={StylesModal.error}>Opss! Tivemos um problema no envio. Tente novamente!</Text>
              </View>
          ):null}
        </View>
      </Modal>
    );
  }
}
