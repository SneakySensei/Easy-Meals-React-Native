import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../components/CustomHeaderButton";
import { ScrollView } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text} {...props}>
        {props.children}
      </Text>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");
  const chosenMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: chosenMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{chosenMeal.duration}m</Text>
        <Text style={styles.text}>{chosenMeal.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>
          {chosenMeal.affordability.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {chosenMeal.ingredients.map((ingredient, index) => (
        <ListItem key={index}>{index + 1 + ". " + ingredient}</ListItem>
      ))}

      <Text style={styles.title}>Steps</Text>
      {chosenMeal.steps.map((step, index) => (
        <ListItem key={index}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const chosenMeal = MEALS.find((meal) => meal.id === mealId);

  return {
    headerTitle: chosenMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="md-bookmark"
          onPress={() => {
            console.log("Marked as favorite!");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  text: {
    fontFamily: "open-sans",
  },
  title: {
    textAlign: "center",
    fontFamily: "open-sans-bold",
    fontSize: 22,
  },
  listItem: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
});

export default MealDetailsScreen;
