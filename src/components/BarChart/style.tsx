import {StyleSheet} from 'react-native';

const StylesBarChart = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
  },
  lines: {
    width: '100%',
    height: 1,
    borderTopWidth: 1,
    position: 'absolute',
    borderColor: '#1d4263',
  },
  chartBox: {
    marginRight: 40,
    alignItems: 'center',
  },
  barBox: {
    height: 180,
    backgroundColor: 'transparent',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  legend: {
    fontSize: 14,
    textAlign: 'left',
    color: '#00a6a8',
  },
  barPoint: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#165182',
    marginBottom: -2,
  },
  bar: {
    width: 4,
    backgroundColor: 'red',
  },
  chartAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#029da4',
  },
  initals: {
    color: '#00a6a8',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 0,
    textAlign: 'center',
    marginTop:10
  },
});

export default StylesBarChart;
