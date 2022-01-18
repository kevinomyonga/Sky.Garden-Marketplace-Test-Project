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
  TouchableHighlight,
  View,
} from "react-native";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";

const { width, height } = Dimensions.get("window");

function ProductDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  /* Get the param */
  const { item } = route.params;

  const addToCart = () => null;

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Breadcrumbs path="Home  /  Clothes & Footwear  /  For Women   /   Women's Clothing" />
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: item.thumbnail }} style={styles.image} />
          <View style={styles.imageGallery}>
            <Image
              source={{ uri: item.thumbnail }}
              style={styles.imageGalleryItem}
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.price}>
            {item.stock_record_price_currency} {item.stock_record_price_retail}
          </Text>
          <Button
            title="Add To Cart"
            onPress={addToCart}
            style={styles.button}
          />
        </View>
        <Image
          source={require("../assets/images/Wave.png")}
          style={styles.wave}
        />
        <View style={styles.colouredContainer}>
          <View style={styles.cardView}>
            <Text style={styles.title}>Know your Seller</Text>
            <View style={{ flexDirection: "row", paddingTop: 13 }}>
              <View>
                <Text style={styles.sellerDetails}>{item.partner_name}</Text>
                <Text style={styles.sellerDetails}>
                  On Sky.Gardensince 2019
                </Text>
                <Text style={styles.sellerDetails}>Nairobi, Kenya</Text>
                <Text style={styles.sellerDetails}>
                  Item Availability Within 24hrs
                </Text>
              </View>
              <View style={{ flex: 1 }} />
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.sellerImage}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 13,
                paddingBottom: 30,
              }}
            >
              <Text style={styles.customerCareText}>60 Bought here</Text>
              <View style={{ flex: 1 }} />
              <View style={{ width: 18 }} />
              <Text style={styles.customerCareText}>13 Reviews</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 40,
    paddingBottom: 40,
  },
  colouredContainer: {
    width: width,
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 10,
    paddingBottom: 35,
    backgroundColor: "#DEF5DA",
  },
  image: {
    height: 362,
    flex: 1,
    borderRadius: 8,
  },
  imageGallery: {
    width: width,
    flexDirection: "row",
    paddingTop: 10,
  },
  imageGalleryItem: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  title: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    paddingBottom: 5,
    color: "#4D4D4D",
  },
  price: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 21,
    color: "#55D187",
  },
  button: {
    width: width,
    height: 62,
    backgroundColor: "#55D187",
    borderRadius: 8,
  },
  wave: {
    width: width,
    height: 38.5,
  },
  cardView: {
    backgroundColor: "#fff",
    flex: 1,
    margin: width * 0.02,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    padding: 30,
  },
  sellerDetails: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    color: "#4D4D4D",
    lineHeight: 22,
  },
  sellerImage: {
    width: 81,
    height: 81,
    borderRadius: 60,
  },
});

export default ProductDetailScreen;
