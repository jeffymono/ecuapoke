import axios from "axios";
import { URL } from "./settings";

export function getSinglePokemon({ id }) {
  return axios.get(`${URL}/${id}`).then((respuesta) => {
    const { Informacion } = respuesta.data;

    return { ...Informacion };
  });
}
