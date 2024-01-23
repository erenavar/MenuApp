import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../components/CategoryGrid";

export default function CategoriesScreen() {
  function renderCategoryItem(itemData) {
    return (
      <CategoryGrid title={itemData.item.title} color={itemData.item.color} />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
