import React, {Component} from 'react';
import {withNavigation, NavigationScreenProp} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar, SafeAreaView, FlatList, Text, View} from 'react-native';
import ContactsService from '../../services/Contacts';
import Errors from '../../services/Errors';
import ContactSend from '../../components/ContactSend';
import Loader from '../../components/Loader';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  loading: boolean;
  contacts: Array<any>;
}

class Home extends Component<Props, State> {
  state = {
    loading: false,
    contacts: [],
  };

  getContacts = async () => {
    this.setState({loading: true});
    try {
      const contacts = await ContactsService.getContacts();
      this.setState({contacts, loading: false});
      
    } catch (error) {
      this.setState({loading: false});
      Errors.RequestError(error, this.props.navigation);
    }
  };

  componentDidMount() {
    this.getContacts();
  }

  _renderItems = ({item}: any) => {
    return <ContactSend contact={item} navigation={this.props.navigation}/>;
  };

  render() {
    const {contacts, loading} = this.state;
    return (
      <LinearGradient colors={['#282c38', '#175081']}>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={'transparent'}
        />
        <SafeAreaView style={{flex: 1}}></SafeAreaView>
        <Loader loading={loading}>
          <FlatList
            data={contacts}
            renderItem={this._renderItems}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={{padding: 20}}
            ListEmptyComponent={() => (
              <Text >Nenhuma contato encontrado</Text>
            )}
          />
        </Loader>
        
      </LinearGradient>
    );
  }
}

export default withNavigation(Home);
