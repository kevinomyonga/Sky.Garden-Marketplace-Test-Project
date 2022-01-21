import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";
import CartCard from "../../components/CartCard";

function CartScreen({ navigation }: { navigation: any }) {
  const proceedToCheckout = () => null;

  function Totals() {
    const [cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
      setCartTotal(0);
    });
    return (
      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total</Text>
        <View style={{ flex: 1 }} />
        <Text style={styles.totalText}>
          Ksh {cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          /-
        </Text>
      </View>
    );
  }

  return (
    <View>
      <Header navigation={navigation} />
      <Breadcrumbs path="Home  /  Cart" />
      <ScrollView style={styles.cartContainer}>
        <Text style={styles.screenTitle}>My cart</Text>
        <FlatList />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            navigation.navigate("NotFound", {});
          }}
        >
          <CartCard />
        </TouchableOpacity>
        <Totals />
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.9} onPress={proceedToCheckout}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Proceed To Checkout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default CartScreen;
