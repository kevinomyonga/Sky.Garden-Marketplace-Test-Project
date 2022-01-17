import React from "react";
import { Image, TextInput, StyleSheet, Text, View } from "react-native";

const Header = () => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={styles.mobileHeader}>
      <View style={styles.customerCareBar}>
        <Text style={styles.customerCareText}>Customer Care</Text>
        <Image source={require("../assets/images/chevron-down.png")} />
        <View style={{ flex: 1 }} />
        <Text style={styles.customerCareText}>Sell</Text>
        <View style={{ width: 18 }} />
        <Text style={styles.customerCareText}>Help & Contact</Text>
      </View>
      <View style={styles.navBar}>
        <Image
          style={styles.hamburgerMenu}
          source={require("../assets/images/Hamburger_Menu.png")}
        />
        <Image
          style={styles.sgLogo}
          source={require("../assets/images/SG_LOGO_WHITE.png")}
        />
        <View style={{ flex: 1 }} />
        <Image
          style={styles.actionItem}
          source={require("../assets/images/user.png")}
        />
        <Image
          style={styles.actionItem}
          source={require("../assets/images/shopping-cart.png")}
        />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchBarInput}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search for anything"
        />
        {/* <Image
          style={styles.actionItem}
          source={require("../assets/images/search.png")}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mobileHeader: {
    backgroundColor: "#1D1D1D",
    height: 140,
  },
  customerCareBar: {
    backgroundColor: "#0E0E0E",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  customerCareText: {
    color: "#DDDDDD",
  },
  navBar: {
    flex: 1,
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
  searchBar: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 15,
  },
  searchBarInput: {
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 68,
    borderWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
});

export default Header;
