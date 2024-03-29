import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";

export default function FoodOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryId.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (item) => item.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, categoryId]);

  function renderFoodItem(itemData) {
    const foodItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      complexity: itemData.item.complexity,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
    };
    return <FoodItem {...foodItemProps} />;
  }
  return (
    <View>
      <FlatList
        data={displayedFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
