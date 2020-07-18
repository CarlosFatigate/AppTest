import React, {Component} from 'react';
import {View} from 'react-native';
import BarChart from '../BarChart';
import Historic from '../../services/Historic';
import Loader from '../Loader';
import StylesChart from "./style";

interface Props {
  historic: Array<any>;
}

interface State {
  values: Array<any>;
  loading: boolean;
}

export default class Chart extends Component<Props, State> {
  state = {
    values: [],
    loading: true,
  };


  async componentDidMount() {
    try {
      const values = await Historic.getChartValues(this.props.historic);
      this.setState({values, loading: false});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {loading, values} = this.state;
    return (
      <Loader loading={loading}>
          <View style={StylesChart.container}>
            <BarChart historic={values}/>
          </View>
      </Loader>
    );
  }
}
