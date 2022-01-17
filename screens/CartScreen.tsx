import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

function CartScreen(props: any) {
  return (
    <View>
      <Header />
      <Breadcrumbs />
    </View>
  );
}

export default CartScreen;
