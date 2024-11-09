import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flexBasis: "20%",
  },
  rightContainer: {
    flexBasis: "60%",
  },
  backButton: {
    width: 50,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#DEF6FF",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "center",
  }
});

export default style;