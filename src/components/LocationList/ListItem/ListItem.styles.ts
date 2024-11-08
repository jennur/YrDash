import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
  title: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  temp: {
    fontSize: 20,
    fontWeight: 'semibold'
  }
});

export default style;