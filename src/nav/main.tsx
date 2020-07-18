import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import HomeScreen from '../screens/Home';
import TransferScreen from '../screens/Transfer';
import HistoricScreen from '../screens/Historic';
import ConnectionScreen from '../screens/Connection';
import HeaderTitle from '../components/HeaderTitle';

import {HeaderBackButton} from '@react-navigation/stack';

export const Screens = {};

export const StatusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight
  : 0;

const Stack = createStackNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 500,
  },
};

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="screen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerStyle: {
              height: 0,
              borderBottomWidth: 0,
              elevation: 0,
            },
            //@ts-ignore
            headerLeft: null,
            //@ts-ignore
            headerTitle: null,
            //@ts-ignore
            headerRight: null,
            gestureDirection: 'horizontal',
          }}
        />
        <Stack.Screen
          name="Transfer"
          component={TransferScreen}
          options={{
            gestureDirection: 'horizontal',
            headerStyle: {
              height: StatusBarHeight + 48,
              borderBottomWidth: 0,
              backgroundColor: '#272e3b',
              elevation: 0,
            },
            //@ts-ignore
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor={'white'} />
            ),
            //@ts-ignore
            headerTitle: <HeaderTitle title={'Enviar dinheiro'} />,
          }}
        />
        <Stack.Screen
          name="Historic"
          component={HistoricScreen}
          options={{
            gestureDirection: 'horizontal',
            headerStyle: {
              height: StatusBarHeight + 48,
              borderBottomWidth: 0,
              backgroundColor: '#272e3b',
              elevation: 0,
            },
            //@ts-ignore
            headerLeft: (props) => (
              <HeaderBackButton {...props} tintColor={'white'} />
            ),
            //@ts-ignore
            headerTitle: <HeaderTitle title={'Histórico de envios'} />,
          }}
        />
        <Stack.Screen
          name="Connection"
          component={ConnectionScreen}
          options={{
            gestureDirection: 'horizontal',
            headerStyle: {
              height: StatusBarHeight + 48,
              borderBottomWidth: 0,
              backgroundColor: '#272e3b',
              elevation: 0,
            },
            //@ts-ignore
            headerLeft: null,
            //@ts-ignore
            headerTitle: null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
