import React from "react";
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

function CartScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Breadcrumbs path="Home  /  Cart" />
      <ScrollView style={styles.cartContainer}>
        <Text style={styles.screenTitle}>My cart</Text>
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
});

export default CartScreen;
