import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, Switch } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>

      <View style={styles.filterItem}>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{ true: Colors.highlightColor1 }}
          thumbColor={Colors.highlightColor2}
          value={isGlutenFree}
          onValueChange={(newValue) => {
            setIsGlutenFree(newValue);
          }}
        />
      </View>
      <View style={styles.filterItem}>
        <Text>Lactose-free</Text>
        <Switch
          trackColor={{ true: Colors.highlightColor1 }}
          thumbColor={Colors.highlightColor2}
          value={isLactoseFree}
          onValueChange={(newValue) => {
            setIsLactoseFree(newValue);
          }}
        />
      </View>
      <View style={styles.filterItem}>
        <Text>Vegan</Text>
        <Switch
          trackColor={{ true: Colors.highlightColor1 }}
          thumbColor={Colors.highlightColor2}
          value={isVegan}
          onValueChange={(newValue) => {
            setIsVegan(newValue);
          }}
        />
      </View>
      <View style={styles.filterItem}>
        <Text>Vegetarian</Text>
        <Switch
          trackColor={{ true: Colors.highlightColor1 }}
          thumbColor={Colors.highlightColor2}
          value={isVegetarian}
          onValueChange={(newValue) => {
            setIsVegetarian(newValue);
          }}
        />
      </View>
    </View>
  );
};

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Filter Meals",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterItem: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default FiltersScreen;
