import React, { useState } from "react";
import {
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";

import styles from "./styles";

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
          <Image source={require("../../assets/images/chevron-down.png")} />
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
              source={require("../../assets/images/Hamburger_Menu.png")}
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
              source={require("../../assets/images/SG_LOGO_WHITE.png")}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <Image
            style={styles.actionItem}
            source={require("../../assets/images/user.png")}
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
                source={require("../../assets/images/shopping-cart.png")}
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
            source={require("../../assets/images/search.png")}
          />
        </View>
      </View>
    </View>
  );
};

export default Header;
