import React from "react";
import ListOfPokemones from "componentes/ListOfPokemones";
import Loading from "componentes/Loading";
import { usePokemones } from "hooks/usePokemones";
import Header from "componentes/Header";
import { Helmet } from "react-helmet";

export default function Home() {
  const { pokemones, loading } = usePokemones();
  return (
    <>
      <Helmet>
        <title>Home | Pokemones</title>
      </Helmet>
      <Header />
      {loading ? <Loading /> : <ListOfPokemones pokemones={pokemones} />}
    </>
  );
}
