import React from "react";
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
} from "react-native";

const { width, height } = Dimensions.get("window");

const Header = ({ navigation }: { navigation: any }) => {
  const [text, onChangeText] = React.useState("");

  return (
    <View>
      <View style={styles.statusBarContainer}></View>
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
            <Image
              style={styles.actionItem}
              source={require("../assets/images/shopping-cart.png")}
            />
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
          {/* <Image
          style={styles.actionItem}
          source={require("../assets/images/search.png")}
        /> */}
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
    backgroundColor: "#1D1D1D",
    height: StatusBar.currentHeight,
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
  searchBar: {
    width: width,
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
