import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Pokemon from "./Components/pokemon/Pokemon";
import Button from "./Components/button/Button.js";




function App() {

    const [allPokemonData,setAllPokemonData] = useState([]);
    const [loading,toggleLoading] = useState(false);
    const [error,setError] = useState(false);
    const [endpoint,setEndpoint] = useState('https://pokeapi.co/api/v2/pokemon/git')

    useEffect(()=> {

async function getMorePokemon(){
toggleLoading(true);
setError(false);

    try{
        const response = await axios.get(endpoint);
        setAllPokemonData(response.data);
        console.log(response);

    }catch (e){
        console.error(e);
        console.error(true);
    }
    toggleLoading(false)
}
    getMorePokemon();

},[endpoint]);


  return (
      <div className="pokemonCards">
          {allPokemonData &&
          <>
             <Button onclick={()=> setEndpoint(allPokemonData.previous)} disabled={!allPokemonData.previous}>
                 previous
             </Button>
              <Button onclick={()=> setEndpoint(allPokemonData.next)} disabled={!allPokemonData.next}>
                  next
              </Button>
              <div className="pokemon-view">
                  {allPokemonData.results && allPokemonData.results.map((pokemon)=>{
                      return <Pokemon key={pokemon.name} endpoint={pokemon.url}/>
                  })}
              </div>
          </>
          }
          {loading && <p>Loading..</p>}
          {error && <p>er ging iets miss bij het ophalen van data</p>}
      </div>

  );
}

export default App;
