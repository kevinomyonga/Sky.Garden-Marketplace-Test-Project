import React, { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const { width, height } = Dimensions.get("window");

const CartCard = ({ item }: { item: any }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const increaseQuantity = () => setQuantity(quantity + 1);

  const removeFromCart = () => null;

  const showConfirmDialog = () => {
    return Alert.alert(
      "Remove Item?",
      "Are you sure you want to remove this item from your cart?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => removeFromCart(),
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

  return (
    <View style={styles.cardView}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://skygarden.azureedge.net/images-thumbnails/images/products/2017/11/product_image_6f34ba30-7b44-4111-aa7b-5f3fa8789012.jpg",
          }}
          style={styles.image}
        />
        <View style={styles.textView}>
          <Text style={styles.title} numberOfLines={2}>
            Item Title
          </Text>
          <View style={styles.quantityController}>
            <TouchableOpacity activeOpacity={0.9} onPress={decreaseQuantity}>
              <Image
                source={require("../assets/images/Decrease.png")}
                style={styles.quantityControl}
              />
            </TouchableOpacity>
            <Text style={styles.title}>{quantity}</Text>
            <TouchableOpacity activeOpacity={0.9} onPress={increaseQuantity}>
              <Image
                source={require("../assets/images/Increase.png")}
                style={styles.quantityControl}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textView}>
          <TouchableOpacity activeOpacity={0.9} onPress={showConfirmDialog}>
            <Text style={styles.title}>Remove</Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            Ksh{" "}
            {(12960 * quantity)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            /-
          </Text>
        </View>
      </View>
    </View>
  );
};

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
    width: width,
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
  quantityController: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
  },
  quantityControl: {
    width: 20,
    height: 20,
    margin: 10,
  },
});

export default CartCard;
