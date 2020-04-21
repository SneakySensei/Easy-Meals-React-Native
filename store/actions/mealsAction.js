export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const SET_FILTERS = "SET_FILTERS";

// NOTE A CUSTOM ACTION
export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const setFilters = (filterSetting) => {
  return { type: SET_FILTERS, filters: filterSetting };
};
