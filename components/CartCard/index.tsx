import React, { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

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
                source={require("../../assets/images/Decrease.png")}
                style={styles.quantityControl}
              />
            </TouchableOpacity>
            <Text style={styles.quantityControlText}>{quantity}</Text>
            <TouchableOpacity activeOpacity={0.9} onPress={increaseQuantity}>
              <Image
                source={require("../../assets/images/Increase.png")}
                style={styles.quantityControl}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 0.5 }} />
        <View style={styles.textView2}>
          <TouchableOpacity activeOpacity={0.9} onPress={showConfirmDialog}>
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
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

export default CartCard;
