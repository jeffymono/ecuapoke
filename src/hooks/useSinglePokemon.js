import { useEffect, useState, useContext } from "react";
import { getSinglePokemon } from "services/getSinglePokemon";
import Context from "contexto/pokemonContext.js";

export function useSinglePokemon({ id }) {
  const { pokemones } = useContext(Context);
  const pokemonContext = pokemones.find((pokemon) => pokemon.PokemonID === id);
  const [pokemon, setPokemon] = useState(pokemonContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!pokemonContext) {
      setLoading(true);
      getSinglePokemon({ id }).then((pokemon) => {
        setPokemon(pokemon);
        setLoading(false);
      });
    }
  }, [id, pokemonContext]);
  return { pokemon, loading };
}
