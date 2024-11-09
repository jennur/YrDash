import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#eaf9ff",
    marginBottom: 20,
    borderRadius: 20,
  },
  mainTempText: {
    fontSize: 20,
  },
  mainTemp: {
    fontSize: 100,
  },
  tempDetails: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tempDetail: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    flexBasis: "40%"
  },
  tempDetailText: {
    fontSize: 12,
    fontWeight: "normal",
    textTransform: "uppercase",
  },
  tempDetailTemp: {
    fontSize: 18,
    fontWeight: "semibold",
  }
});

export default style;