import { useContext, useEffect, useState } from "react";
import Context from "../contexto/pokemonContext";
import { getPokemones } from "../services/getPokemones";

export function usePokemones({ keyword } = { keyword: null }) {
  const { pokemones, setPokemones } = useContext(Context);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPokemones({ keyword }).then((pokemones) => {
      setPokemones(pokemones);
      setLoading(false);
    });
  }, [keyword, setPokemones]);
  return { pokemones, loading };
}
