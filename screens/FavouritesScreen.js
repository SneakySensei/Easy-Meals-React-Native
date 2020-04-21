import React from "react";
import MealList from "../components/MealList";

import { useSelector } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import Colors from "../constants/Colors";
import HeaderButton from "../components/CustomHeaderButton";
import { View, Text, StyleSheet } from "react-native";

const FavouritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length == 0) {
    return (
      <View style={styles.screen}>
        <Text style={styles.text}>No Favorites Added Yet</Text>
      </View>
    );
  }
  return <MealList data={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Favorites",
    headerStyle: {
      backgroundColor: Colors.highlightColor1,
    },
    headerTintColor: Colors.highlightColor2,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans",
  },
});

export default FavouritesScreen;
