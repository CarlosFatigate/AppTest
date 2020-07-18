/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Root from "./nav/main";
import { Provider } from 'unstated-typescript'

interface Props {}
interface State {}
export default class App extends Component<Props, State> {
  render() {
    return (
        <Provider>
          <Root/>
        </Provider>

    );
  }
}