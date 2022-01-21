import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  container: {
    width: width * 0.9,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
  },
  image: {
    width: 70,
    height: 70,
  },
  textView: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 12,
    paddingBottom: 12,
  },
  textView2: {
    flex: 1,
    flexWrap: "wrap",
    alignItems: "flex-end",
    paddingLeft: 14,
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
  buttonText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 11,
    lineHeight: 13,
    paddingBottom: 5,
    color: "#55D187",
  },
  price: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 16,
    lineHeight: 16,
  },
  addToCart: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 12,
    paddingBottom: 12,
  },
  quantityController: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
  },
  quantityControl: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  quantityControlText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,
    marginRight: 10,
  },
});

export default styles;
