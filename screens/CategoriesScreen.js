import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";

export default function CategoriesScreen() {
  function renderCategoryItem(item) {
    console.log(item);
  }

  return (
    <View>

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
