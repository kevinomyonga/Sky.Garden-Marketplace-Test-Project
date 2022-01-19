import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import Moment from "moment";
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

  const [selectedThumbnail, setSelectedThumbnail] = useState(
    item.image_list[0]
  );

  const handleImageSelection = (id: any) => {
    if (selectedThumbnail !== id) {
      setSelectedThumbnail(id);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Breadcrumbs path="Home  /  Clothes & Footwear  /  For Women   /   Women's Clothing" />
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: selectedThumbnail }} style={styles.image} />
          <View style={styles.imageGallery}>
            <FlatList
              horizontal={true}
              extraData={selectedThumbnail}
              data={item.image_list}
              keyExtractor={(item, index) => "key" + index}
              renderItem={({ item }) => (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    handleImageSelection(item);
                  }}
                >
                  <Image
                    source={{ uri: item }}
                    style={styles.imageGalleryItem}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 30,
              alignItems: "baseline",
            }}
          >
            <Text style={styles.partnerName}>{item.partner_name}</Text>
            {item.partner_is_skygarden_verified ? (
              <Image
                source={require("../assets/images/verified.png")}
                style={styles.verified}
              />
            ) : null}
          </View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>
              {item.stock_record_price_currency}{" "}
              {item.stock_record_price_retail
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              /-
            </Text>
            {item.offer_benefit_value > 0 ? (
              <Text style={styles.oldPrice}>
                {item.stock_record_price_currency}{" "}
                {(item.stock_record_price_retail + item.offer_benefit_value)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                /-
              </Text>
            ) : null}
          </View>
          <TouchableOpacity activeOpacity={0.9} onPress={addToCart}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>ADD TO CART</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.calculateShippingContainer}>
            <Image
              style={styles.calculateShippingIcon}
              source={require("../assets/images/DeliveryCar-Top.png")}
            />
            <Text style={styles.calculateShippingText}>
              Delivery within Nairobi CBD from as low as Ksh 100{" "}
              <Text
                style={{ color: "blue" }}
                onPress={() =>
                  Linking.openURL("https://sky.garden/same-day-delivery")
                }
              >
                Calculate Shipping
              </Text>
            </Text>
          </View>
        </View>
        <Image
          source={require("../assets/images/Wave.png")}
          style={styles.wave}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.cardView}>
            <Text style={styles.title}>Know your Seller</Text>
            <View style={{ flexDirection: "row", paddingTop: 13 }}>
              <View>
                <Text style={styles.partnerName}>{item.partner_name}</Text>
                <Text style={styles.sellerDetails}>
                  On Sky.Garden since{" "}
                  {Moment(item.partner_date_created).format("YYYY")}
                </Text>
                <Text style={styles.sellerDetails}>
                  {item.partner_city}
                  {item.partner_country_display
                    ? ", " + item.partner_country_display
                    : null}
                </Text>
                <Text style={styles.sellerDetails}>
                  Item Availability Within 24hrs
                </Text>
              </View>
              <View style={{ flex: 1 }} />
              <Image
                source={{ uri: item.partner_profile_image }}
                style={styles.sellerImage}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                paddingTop: 13,
              }}
            >
              <Text>60 Bought here</Text>
              <View style={{ flex: 1 }} />
              <View style={{ width: 18 }} />
              <Text>13 Reviews</Text>
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
  calculateShippingContainer: {
    width: width * 0.9,
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 19,
    paddingBottom: 19,
    backgroundColor: "#DEF5DA",
    borderRadius: 8,
    marginTop: 10,
    flexDirection: "row",
  },
  calculateShippingIcon: {
    width: 62,
    height: 33,
    marginRight: 16,
  },
  calculateShippingText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 12,
    color: "#4D4D4D",
    lineHeight: 16,
    flex: 1,
    flexWrap: "wrap",
  },
  descriptionContainer: {
    width: width,
    paddingLeft: 35,
    paddingRight: 35,
    paddingTop: 10,
    paddingBottom: 35,
    backgroundColor: "#DEF5DA",
    flex: 1,
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
    marginRight: 16,
  },
  partnerName: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 11,
    color: "#4D4D4D",
    textDecorationLine: "underline",
    marginRight: 10,
  },
  verified: {
    width: 20,
    height: 20,
  },
  title: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 21,
    paddingBottom: 5,
    color: "#4D4D4D",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  price: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 21,
    color: "#55D187",
  },
  oldPrice: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 16,
    color: "#4D4D4D",
    textDecorationLine: "line-through",
    marginLeft: 15,
  },
  button: {
    width: width * 0.9,
    height: 62,
    backgroundColor: "#55D187",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 21.5,
    color: "#F7FDF9",
  },
  wave: {
    width: width,
    height: 38.5,
  },
  descriptionTitle: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 17,
    color: "#4D4D4D",
  },
  descriptionText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    color: "#4D4D4D",
  },
  cardView: {
    backgroundColor: "#fff",
    flex: 1,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    padding: 30,
    marginTop: 38,
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
