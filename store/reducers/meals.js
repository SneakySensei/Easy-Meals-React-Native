import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE, SET_FILTERS } from "../actions/mealsAction";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilers = action.filters;
      const filteredMeals = state.meals.filter((meal) => {
        if (appliedFilers.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilers.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilers.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilers.vegetarian && !meal.isVegetarian) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
