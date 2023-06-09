import { useState } from "react";
import Card from "../Card/Card.jsx";
import { connect, useDispatch } from 'react-redux'
import { filterCards, orderCards } from "../../redux/actions.js";

const Favorites = ({ myFavorites }) => {
    const [favorites, setFavorites] = useState(myFavorites);
    const [aux, seTAux ] = useState(false)
    const dispatch = useDispatch();
    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        seTAux(true)
    }
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }
    const onClose = (id) => {
        const charactersFiltered = favorites.filter(
          (character) => character.id !== id
        );
        setFavorites(charactersFiltered);
    };
    return (
        <div>
            <select name="Order" onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="Filter" onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All Characters</option>
            </select>
            {
                favorites?.map(fav => {
                    return (
                        <Card
                            key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={onClose}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);

