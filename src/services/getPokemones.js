import { URL } from "./settings";
import axios from "axios";

export function getPokemones({ keyword = null }) {
  const keywordUse = keyword ? "/buscar/" + keyword : "";
  const pokemonesDataCompleta = async () => {
    const pokemones = await axios.get(`${URL}${keywordUse}`);
    const detalles = await Promise.all(
      pokemones.data.results.map(async ({ Nombre, url }) => {
        const detalles = await axios.get(`${url}`);
        const { Informacion } = detalles.data;
        return { Nombre, url, ...Informacion };
      })
    );

    return detalles;
  };
  return pokemonesDataCompleta();
}
