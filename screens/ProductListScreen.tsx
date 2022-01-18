import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import productsAPI from "../apis/Products";
import Breadcrumbs from "../components/Breadcrumbs";

const { width, height } = Dimensions.get("window");

function ProductListScreen({ navigation }: { navigation: any }) {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsFromAPI();
  }, []);

  const renderFooter = () => {
    return (
      //Footer View with page numbers
      <View>
        <Text>Footer</Text>
      </View>
    );
  };

  function getProductsFromAPI() {
    setLoading(true);

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
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }

  if (!products) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Breadcrumbs path="Home / Mobile phones & Tablets / Smartphones" />
      <Image
        style={styles.backgroundImage}
        source={require("../assets/images/Product_List_Background.png")}
      />
      <ScrollView
        style={styles.productListContainer}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getProductsFromAPI}
          />
        }
      >
        <Text style={styles.listTitle} numberOfLines={2}>
          Smartphones
        </Text>
        {!loading ? (
          <FlatList
            data={products}
            keyExtractor={(item, index) => "key" + index}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  navigation.navigate("ProductDetail", { item: item });
                }}
              >
                <ProductCard item={item} navigation={navigation} />
              </TouchableOpacity>
            )}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            ListFooterComponent={renderFooter}
            nestedScrollEnabled={true}
          />
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  listTitle: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 25,
    paddingTop: 29.07,
    paddingBottom: 22,
  },
  backgroundImage: {
    width: width,
    height: 552,
    position: "absolute",
    zIndex: -1,
  },
  productListContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

export default ProductListScreen;
