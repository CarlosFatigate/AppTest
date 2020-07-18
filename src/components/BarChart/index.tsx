import React, {Component} from 'react';
import {View, Image, ScrollView, Text} from 'react-native';
import Images from '../../utils/Images';
import LinearGradient from 'react-native-linear-gradient';
import Loader from '../Loader';
import StylesBarChart from './style';
import Utils from "../../services/Utils";

interface Props {
  historic: Array<any>;
}

interface State {
  lines: Array<number>;
  maxValue: number;
  loading: boolean;
}

export default class BarChart extends Component<Props, State> {
  state = {
    lines: [],
    maxValue: 0,
    loading: true,
  };

  componentDidMount() {
    let maxValue = Math.max.apply(
      Math,
      this.props.historic.map(function (item) {
        return item.value;
      }),
    );
    let lines = [];
    for (let index = 0; index < 9; index++) {
      lines.push(0);
    }
    this.setState({lines, maxValue, loading: false});
  }

  _getHeigth = (maxValue: number, value: number) => {
    return value / maxValue;
  };

  render() {
    const {historic} = this.props;
    const {maxValue, lines, loading} = this.state;

    return (
      <ScrollView horizontal={true} style={StylesBarChart.scrollView}>
        <Loader loading={loading}>
          {lines.map((item: number, index: number) => {
            return (
              <View
                key={index}
                style={[StylesBarChart.lines, {top: 16 * index}]}></View>
            );
          })}
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            {historic.map((item: any, index: number) => {
              let height = this._getHeigth(maxValue, item.value) * 100;
              return (
                <View key={index} style={StylesBarChart.chartBox}>
                  <View style={StylesBarChart.barBox}>
                    <Text
                      style={[
                        StylesBarChart.legend,
                        {
                          marginTop: 100 - height,
                        },
                      ]}>
                      {item.value}
                    </Text>
                    <View style={StylesBarChart.barPoint}></View>
                    <LinearGradient
                      colors={['#165182', '#029da4']}
                      style={[
                        StylesBarChart.bar,
                        {
                          height: height,
                        },
                      ]}></LinearGradient>
                    {item.image ? (
                      <Image
                        style={StylesBarChart.chartAvatar}
                        source={item.image}
                      />
                    ) : (
                      <View style={StylesBarChart.chartAvatar}>
                        <Text style={StylesBarChart.initals}>
                          {Utils.getInitials(item.name)}
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              );
            })}
          </View>
        </Loader>
      </ScrollView>
    );
  }
}
