import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  listTitle: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 25,
    paddingTop: 29.07,
    paddingBottom: 22,
  },
  backgroundImage: {
    width: width,
    height: 552,
    position: "absolute",
    zIndex: -1,
  },
  productListContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
  footer: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
