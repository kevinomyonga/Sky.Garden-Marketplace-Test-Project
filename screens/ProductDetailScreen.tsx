import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

function ProductDetailScreen(props: any) {
  return (
    <View>
      <Header />
      <Breadcrumbs />
    </View>
  );
}

export default ProductDetailScreen;
