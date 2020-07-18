import * as React from 'react';

import {View, ActivityIndicator, ViewStyle, Text} from 'react-native';

interface Props {
  loading: boolean;
  style?: ViewStyle;
  loader?: React.ReactNode;
  text?: string;
}

export default class Loader extends React.Component<
  React.PropsWithChildren<Props>
> {
  render() {
    const {loader, loading, style, text} = this.props;
    return (
      <View style={style}>
        {loading ? (
          !loader ? (
            <View>
              <ActivityIndicator
                color={'#00a6a8'}
                size={'large'}
                style={{padding: 20, alignSelf: 'center'}}
              />
              {text ? <Text style={{color:'white', fontSize:18, padding: 20, alignSelf: 'center'}}>{text}</Text> : null}
            </View>
          ) : (
            loader
          )
        ) : (
          this.props.children
        )}
      </View>
    );
  }
}
