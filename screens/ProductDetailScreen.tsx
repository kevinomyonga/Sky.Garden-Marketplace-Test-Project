import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

function ProductDetailScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <Header navigation={navigation} />
      <Breadcrumbs path="Home  /  Clothes & Footwear  /  For Women   /   Women's Clothing" />
    </View>
  );
}

export default ProductDetailScreen;
