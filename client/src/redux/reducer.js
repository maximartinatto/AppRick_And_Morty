import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, ADD_CHARACTERS, REMOVE_CHARACTER } from "./action-types"

const  initialState = {
    myFavorites: [],
    allCharactersFav: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            }
        case ADD_CHARACTERS:
            if (Array.isArray(payload)) {
                return {
                    ...state,
                    charactersOrigin: [...payload],
                    characters: [...payload],
                };
                
            } 
        case REMOVE_CHARACTER:
            const newCharacter = state.myFavoritesOrigin.filter(
                (ch) => ch.id !== payload
            );
            return {
                ...state,
                myFavorites: newCharacter,
                myFavoritesOrigin: newCharacter,
            };
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            }
        
        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavorites: 
                    payload === 'allCharacters'
                    ? [...state.allCharactersFav] // tener en cuenta este punto extra para el PI
                    : allCharactersFiltered
            }
        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                    ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                    : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state}
    }
}

export default reducer;