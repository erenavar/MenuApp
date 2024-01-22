class Food {
  constructor(
    id,
    categoryId,
    title,
    affordability,
    complexity,
    imageUrl,
    ingredients
  ) {
    (this.id = id), (this.categoryId = categoryId);
    (this.title = title),
      (this.affordability = affordability),
      (this.complexity = complexity),
      (this.imageUrl = imageUrl),
      (this.ingredients = ingredients);
  }
}

export default Food;
