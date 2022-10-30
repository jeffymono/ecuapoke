import React from "react";
import Pokemon from "../Pokemon";
import "./ListOfPokemones.css";

export default function ListOfPokemones({ pokemones }) {
  return (
    <div className="ListOfPokemones">
      {pokemones.map(({ Nombre, url, PokemonID, Descripcion, sprites }) => {
        const { front_default } = sprites.other.home;
        return (
          <Pokemon
            key={PokemonID}
            nombre={Nombre}
            descripcion={Descripcion}
            imagen={front_default}
            url={url}
            PokemonID={PokemonID}
          />
        );
      })}
    </div>
  );
}
