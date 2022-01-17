import React from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ProductCard = ({ item }: { item: any }) => {
  return (
    <View style={styles.cardView}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text numberOfLines={2}>{item.title}</Text>
      <Text>
        {item.stock_record_price_currency} {item.stock_record_price_retail}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    width: 170,
    height: 280,
    flex: 1,
    margin: 5,
  },
  image: {
    height: 150,
    flex: 1,
  },
});

export default ProductCard;
