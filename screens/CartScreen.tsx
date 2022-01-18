import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import CartCard from "../components/CartCard";

const { width, height } = Dimensions.get("window");

function CartScreen({ navigation }: { navigation: any }) {
  const [cartTotal, setCartTotal] = useState(0);

  const proceedToCheckout = () => null;

  return (
    <View>
      <Header navigation={navigation} />
      <Breadcrumbs path="Home  /  Cart" />
      <ScrollView style={styles.cartContainer}>
        <Text style={styles.screenTitle}>My cart</Text>
        <FlatList />
        <CartCard />
        <View style={styles.totalSection}>
          <Text style={styles.totalText}>Total</Text>
          <View style={{ flex: 1 }} />
          <Text style={styles.totalText}>
            Ksh {cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            /-
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Proceed To Checkout</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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

export default CartScreen;
