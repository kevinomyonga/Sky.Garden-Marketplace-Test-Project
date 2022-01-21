import React, { useState } from "react";
import {
  FlatList,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";
import Moment from "moment";
import Header from "../../components/Header";
import Breadcrumbs from "../../components/Breadcrumbs";

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
      <Breadcrumbs path="Home / Mobile phones & Tablets / Smartphones" />
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
                source={require("../../assets/images/verified.png")}
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
              source={require("../../assets/images/DeliveryCar-Top.png")}
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
          source={require("../../assets/images/Wave.png")}
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

export default ProductDetailScreen;
