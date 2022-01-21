import React from "react";
import { Dimensions, Text, View } from "react-native";
import styles from "./styles";

const { width, height } = Dimensions.get("window");

const Breadcrumbs = ({ path }: { path: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{path}</Text>
    </View>
  );
};

export default Breadcrumbs;
