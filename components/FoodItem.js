import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FoodItem({
  id,
  title,
  complexity,
  imageUrl,
  affordability,
}) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
