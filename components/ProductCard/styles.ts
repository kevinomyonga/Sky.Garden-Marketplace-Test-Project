import { StyleSheet, Platform, Dimensions } from "react-native";

import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#fff",
    width: width * 0.4,
    height: 280,
    flex: 1,
    marginBottom: width * 0.05,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  image: {
    height: height / 6,
    flex: 1,
    borderRadius: 4,
  },
  textView: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 12,
    paddingBottom: 12,
  },
  title: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 16,
    paddingBottom: 5,
  },
  price: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 16,
    lineHeight: 16,
  },
  oldPrice: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 11,
    color: "#4D4D4D",
    textDecorationLine: "line-through",
  },
  button: {
    height: 28,
    backgroundColor: "#333333",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    flexDirection: "row",
  },
  buttonText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 10,
    color: "#F7FDF9",
  },
  buttonLine: {
    width: 1,
    height: 18,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonIcon: {
    width: 14,
    height: 14,
  },
});

export default styles;
