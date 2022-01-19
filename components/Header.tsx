import React, { ContextType, useContext, useState } from "react";
import {
  Image,
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";

import Constants from "expo-constants";
import { CartContext } from "../context/CartContext";

const { width, height } = Dimensions.get("window");

const Header = ({ navigation }: { navigation: any }) => {
  const [text, onChangeText] = React.useState("");

  //const { getItemsCount } = useContext(CartContext) as ContextType;
  const [cartTotal, setCartTotal] = useState(4);

  return (
    <View>
      <View style={styles.statusBarContainer}></View>
      <View style={styles.mobileHeader}>
        <View style={styles.customerCareBar}>
          <Text style={styles.customerCareText}>Customer Care</Text>
          <Image source={require("../assets/images/chevron-down.png")} />
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              Linking.openURL(
                "https://play.google.com/store/apps/details?id=garden.sky.shop"
              );
            }}
          >
            <Text style={styles.customerCareText}>Sell</Text>
          </TouchableOpacity>
          <View style={{ width: 18 }} />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              Linking.openURL("https://kevinomyonga.com");
            }}
          >
            <Text style={styles.customerCareText}>Help & Contact</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.navBar}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <Image
              style={styles.hamburgerMenu}
              source={require("../assets/images/Hamburger_Menu.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("ProductList");
            }}
          >
            <Image
              style={styles.sgLogo}
              source={require("../assets/images/SG_LOGO_WHITE.png")}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <Image
            style={styles.actionItem}
            source={require("../assets/images/user.png")}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("Cart");
            }}
          >
            <View style={styles.notificationBadgeContainer}>
              <Image
                style={styles.actionItem}
                source={require("../assets/images/shopping-cart.png")}
              />
              {cartTotal > 0 ? (
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationBadgeText}>
                    {cartTotal <= 99 ? cartTotal : "99+"}
                  </Text>
                </View>
              ) : null}
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchBarInput}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search for anything"
            placeholderTextColor="#9D9D9D"
          />
          <Image
            style={styles.searchBarIcon}
            source={require("../assets/images/search.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileHeader: {
    backgroundColor: "#1D1D1D",
    height: 140,
  },
  statusBarContainer: {
    flex: Platform.OS === "ios" ? 1 : 0,
    backgroundColor: "#1D1D1D",
    paddingTop: Constants.statusBarHeight,
  },
  customerCareBar: {
    width: width,
    height: 34,
    backgroundColor: "#0E0E0E",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  customerCareText: {
    color: "#DDDDDD",
    fontSize: 13,
  },
  navBar: {
    width: width,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 15,
  },
  hamburgerMenu: {
    width: 29,
    height: 19,
    marginRight: 17,
  },
  sgLogo: {
    width: 104.15,
    height: 33.93,
  },
  actionItem: {
    width: 24,
    height: 24,
    marginLeft: 16,
  },
  notificationBadgeContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  notificationBadge: {
    position: "absolute",
    backgroundColor: "#55D187",
    borderRadius: 60,
    right: 0,
    top: 0,
  },
  notificationBadgeText: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
    color: "#000000",
  },
  searchBar: {
    width: width,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 15,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
  },
  searchBarInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 68,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 42,
  },
  searchBarIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 34,
    bottom: 21,
  },
});

export default Header;
