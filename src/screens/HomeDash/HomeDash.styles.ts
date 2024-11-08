import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  errorMessage: {
    color: 'red',
    marginTop: 5,
    marginBottom: 10
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    flex: 1,
  },
  searchButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    fontSize: 25,
    borderWidth: 2,
    borderColor: '#fff',
  },
  searchButtonText: {
    color: '#05668D'
  }
});

export default style;