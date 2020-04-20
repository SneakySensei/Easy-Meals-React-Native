import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouritesScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList data={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavouritesScreen;
