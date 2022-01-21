import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

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
          {item.stock_record_price_currency}{" "}
          {item.stock_record_price_retail
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Text>
        {item.offer_benefit_value > 0 ? (
          <Text style={styles.oldPrice}>
            {item.stock_record_price_currency}{" "}
            {(item.stock_record_price_retail + item.offer_benefit_value)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            /-
          </Text>
        ) : null}
        <TouchableOpacity activeOpacity={0.9} onPress={addToCart}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add To Cart</Text>
            <Image
              style={styles.buttonLine}
              source={require("../../assets/images/Line.png")}
            />
            <Image
              style={styles.buttonIcon}
              source={require("../../assets/images/shopping-cart.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
