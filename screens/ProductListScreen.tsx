import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ProductCard from "../components/ProductCard";
import productsAPI from "../apis/Products";

function ProductListScreen(props: any) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  function getProductsFromAPI() {
    const params = JSON.stringify({
      search:
        "offer_benefit_type eq 'Absolute' and category_slug eq 'smartphones' ",
      select:
        "title, partner_name, thumbnail, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value, category_name, category_slug",
    });

    productsAPI
      .post(
        "indexes/dev-productsv3/docs/search?api-version=2017-11-11",
        params,
        {
          headers: {
            "content-type": "application/json",
            "api-key": "4F2408C83BBB69BB31AE97737ED6EE2F",
          },
        }
      )
      .then(function (response) {
        setProducts(response.data.value);
        console.log(products);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!products) {
    return null;
  }

  return (
    <View>
      <Text>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <ProductCard item={item} />;
        }}
        numColumns={2}
      />
    </View>
  );
}

export default ProductListScreen;
