import React, {Component} from 'react';
import {withNavigation, NavigationScreenProp} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import {StatusBar, SafeAreaView, FlatList, Text, View, ScrollView} from 'react-native';
import HistoricService from '../../services/Historic';
import Errors from '../../services/Errors';
import Contact from '../../components/Contact';
import Loader from '../../components/Loader';
import Chart from '../../components/Chart';

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

interface State {
  loading: boolean;
  historic: Array<any>;
}

class Home extends Component<Props, State> {
  state = {
    loading: false,
    historic: [],
  };

  getHistoric = async () => {
    this.setState({loading: true});
    try {
      const historic = await HistoricService.getHistoric();
      this.setState({historic, loading: false});
    } catch (error) {
      this.setState({loading: false});
      Errors.RequestError(error, this.props.navigation);
    }
  };

  componentDidMount() {
    this.getHistoric();
  }

  _renderItems = ({item}: any) => {
    return <Contact contact={item}/>;
  };

  render() {
    const {historic, loading} = this.state;
    return (
      <LinearGradient colors={['#282c38', '#175081']}>
        <StatusBar
          translucent={true}
          barStyle="light-content"
          backgroundColor={'transparent'}
        />
        <SafeAreaView style={{flex: 1}}></SafeAreaView>
        <Loader loading={loading}>
          
          <ScrollView>
            <Chart historic={historic} />
            <FlatList
              data={historic}
              renderItem={this._renderItems}
              style={{width: '100%'}}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={{padding: 20}}
              ListEmptyComponent={() => <Text>Nenhuma contato encontrado</Text>}
            />
          </ScrollView>
        </Loader>
      </LinearGradient>
    );
  }
}

export default withNavigation(Home);
