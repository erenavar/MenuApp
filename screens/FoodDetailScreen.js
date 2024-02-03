import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React from "react";
import { FOODS } from "../data/dummy-data";

export default function FoodDetailScreen({ route }) {
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);
  const ingredients = selectedFood.ingredients;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <ScrollView>
        <View style={styles.subPic}>
          <Text style={styles.subPicItem}>{selectedFood.complexity}</Text>
          <Text style={styles.subPicItem}>{selectedFood.affordability}</Text>
        </View>

        <View style={styles.listContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Ingredients</Text>
          </View>
          <View style={styles.listIng}>
            {ingredients.map((item) => {
              return <Text style={styles.ingItem}>{item}</Text>;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  container: {},
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5,
  },
  subPic: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  subPicItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "blue",
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "rebeccapurple",
    marginVertical: 5,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rebeccapurple",
  },
  listIng: {
    marginTop: 10,
  },
  ingItem: {
    width: "100%",
    textAlign: "center",
    color: "lightgray",
    marginVertical: 4,
    backgroundColor: "rebeccapurple",
    borderRadius: 10,
    paddingVertical: 10,
  },
});
