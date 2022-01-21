import { StyleSheet, Platform, Dimensions } from "react-native";

import Constants from "expo-constants";

const { width, height } = Dimensions.get("window");

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

export default styles;
