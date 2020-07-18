import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Images from '../../utils/Images';
import {withNavigation, NavigationScreenProp} from 'react-navigation';
import {StatusBar, SafeAreaView, Image, Text} from 'react-native';
import Styles from './style';
import Button from '../../components/Button';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

class Connection extends Component<Props> {
  
  render() {
    const {navigation} = this.props;
    return (
      <LinearGradient colors={['#282c38', '#1e4264', '#175081']} style={Styles.container}>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={'transparent'}
        />
        <SafeAreaView style={{flex: 1}}>
            <Image style={Styles.image} source={Images.noWIfi} />
            <Text style={Styles.text}>Opss! Ocorreu um erro. Verifique sua conexão com internet e tente novamente.</Text>
            <Button
                label={'Tentar novamente'}
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

export default withNavigation(Connection);
