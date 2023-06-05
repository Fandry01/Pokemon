import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./Pokemon.css";

const Pokemon =({endpoint}) => {

    const [pokemonData, setPokemonData] = useState({});

    useEffect(()=> {

        async function fetchData() {

            try {
                const response = await axios.get(endpoint);
                setPokemonData(response.data);
                console.log(response.data);
            }catch (e) {
                console.error(e);
            }
        }
        if(endpoint){
            fetchData();
        }

    },[endpoint])

    return (
        <div className='PokemonDetails'>
            {Object.keys(pokemonData).length > 0 &&
                <>
                    <img src={pokemonData.sprites.front_default} alt="pokemonimage"/>
                    <h2>Name:{pokemonData.name}</h2>
                    <h2>Moves:{pokemonData.moves.length}</h2>
                    <h2>Weight:{pokemonData.weight}</h2>
                    <ul>
                        {pokemonData.abilities.map((ability)=>{
                            return <li key={`${ability.ability.name}`}>
                                {ability.ability.name}
                            </li>
                        })}
                    </ul>
                </>
            }
        </div>
    );
};

export default Pokemon;