import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  cartContainer: {
    paddingLeft: 17,
    paddingRight: 17,
  },
  screenTitle: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 25,
    paddingTop: 27.07,
    paddingBottom: 20,
    color: "#4D4D4D",
  },
  totalSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 16,
    paddingTop: 27,
    paddingBottom: 27,
    color: "#4D4D4D",
  },
  button: {
    width: width * 0.7,
    height: 40,
    backgroundColor: "#55D187",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 16,
    color: "#F7FDF9",
  },
});

export default styles;
