import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width, height } = Dimensions.get("window");

const Breadcrumbs = ({ path }: { path: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{path}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 26,
    paddingRight: 26,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: "#F7FDF9",
    position: "relative",
  },
  text: {
    fontFamily: "Satoshi",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 10,
    color: "#9D9D9D",
    lineHeight: 13,
  },
});

export default Breadcrumbs;
