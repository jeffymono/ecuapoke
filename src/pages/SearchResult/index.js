import React from "react";
import ListOfPokemones from "componentes/ListOfPokemones";
import Header from "componentes/Header";
import { usePokemones } from "hooks/usePokemones";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function SearchResult() {
  let { keyword } = useParams();
  const { pokemones, loading } = usePokemones({ keyword });
  const title = `${pokemones.length} Resultados | Pokemones`;
  return (
    <>
      <Header initialKeyword={keyword} />
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={`Aquí se muestra la lista de resultados de ${keyword}`}
        />
      </Helmet>
      <h4>
        Se han encontrado {pokemones.length} coincidencias de "{keyword}"
      </h4>
      {loading ? <h4>Loading</h4> : <ListOfPokemones pokemones={pokemones} />}
    </>
  );
}
