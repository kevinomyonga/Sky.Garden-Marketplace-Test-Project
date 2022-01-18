import React from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ProductCard = ({ item, navigation }: { item: any; navigation: any }) => {
  const addToCart = () => null;

  return (
    <View style={styles.cardView}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <View style={styles.textView}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.price}>
          {item.stock_record_price_currency} {item.stock_record_price_retail}
        </Text>
        <Button title="Add To Cart" onPress={addToCart} />
      </View>
    </View>
  );
};

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
  addToCart: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 12,
    paddingBottom: 12,
  },
});

export default ProductCard;
