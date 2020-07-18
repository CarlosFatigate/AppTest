import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../../components/Button';
import {withNavigation, NavigationScreenProp} from 'react-navigation';
import {StatusBar, SafeAreaView, View} from 'react-native';
import Styles from './style';
import Auth from '../../services/Auth';
import Errors from '../../services/Errors';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../components/Loader';
import UserCard from '../../components/UserCard';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  loading: boolean;
}

class Home extends Component<Props, State> {
  state = {
    loading: true,
  };

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('@TOKEN');
      if (token == null) {
        this.getToken();
      } else {
        this.setState({loading: false});
      }
    } catch (error) {
      this.setState({loading: false});
      Errors.RequestError(error, this.props.navigation);
    }
  };

  getToken = async () => {
    try {
      await Auth.getToken();
      this.setState({loading: false});
    } catch (error) {
      this.setState({loading: false});
      Errors.RequestError(error, this.props.navigation);
    }
  };

  componentDidMount() {
    this._retrieveData();
  }

  render() {
    const {navigation} = this.props;
    const {loading} = this.state;
    return (
      <LinearGradient colors={['#282c38', '#1e4264', '#175081']} style={Styles.container}>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={'transparent'}
        />
        <SafeAreaView style={{flex: 1}}>
          <Loader
            loading={loading}
            text={'Estamos carregando as suas informações!'}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <UserCard />
            <View style={Styles.buttonCard}>
              <Button
                label={'Enviar dinheiro'}
                onPress={() => {
                  navigation.navigate('Transfer');
                }}
              />
              <Button
                label={'Histórico de envios'}
                onPress={() => {
                  navigation.navigate('Historic');
                }}
              />
            </View>
          </Loader>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

export default withNavigation(Home);
