import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import productsAPI from "../../apis/Products";
import Breadcrumbs from "../../components/Breadcrumbs";

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
      <View style={styles.footer}>
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
        "productId, title, partner_name, thumbnail, image_list, stock_record_price_currency, stock_record_price_retail, offer_benefit_type, offer_benefit_value, category_name, category_slug, description, partner_profile_image, partner_display_name, partner_date_created, partner_city, partner_country_display, partner_is_skygarden_verified",
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
        source={require("../../assets/images/Product_List_Background.png")}
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

export default ProductListScreen;
