import { ADD_FAVORITE, FILTER, REMOVE_FAVORITE, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== action.payload
        ),
      };
    case FILTER:
      const filterFavorites = state.allCharacters.filter(
        (character) => character.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filterFavorites,
      };
    case ORDER:
      const { allCharacters } = state;
      let sortCharacters = [];
      if (action.payload === "Ascendente") {
        sortCharacters = [...allCharacters].sort((a, b) => a.id - b.id);
      } else if (action.payload === "Descendente") {
        sortCharacters = [...allCharacters].sort((a, b) => b.id - a.id);
      }
      return {
        ...state,

        myFavorites: sortCharacters,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
