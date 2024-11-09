import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 60,
    width: "45%",
    marginBottom: "5%",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#eaf9ff",
  },
  title: {
    fontSize: 12,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  value: {
    fontSize: 20,
    fontWeight: "normal",
    textTransform: "capitalize",
  }
});

export default style;