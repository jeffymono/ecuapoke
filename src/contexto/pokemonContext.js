import React, { useState } from "react";

const Context = React.createContext({});

export function PokemonContextProvider({ children }) {
  const [pokemones, setPokemones] = useState([]);
  return (
    <Context.Provider value={{ pokemones, setPokemones }}>
      {children}
    </Context.Provider>
  );
}
export default Context;
