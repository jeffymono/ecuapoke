import { useSinglePokemon } from "hooks/useSinglePokemon";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Pokemon from "componentes/Pokemon";
import Loading from "../../componentes/Loading";
import { Button, Card } from "react-bootstrap";
import "./detail.css";
import { Helmet } from "react-helmet";

export default function Detail() {
  const { id } = useParams();
  const { pokemon, loading } = useSinglePokemon({ id });
  if (!pokemon) return null;
  const {
    Nombre,
    PokemonID,
    Descripcion,
    sprites,
    Altura,
    Peso,
    tipos,
    evoluciones,
  } = pokemon;
  const title = Pokemon ? Nombre + " | Pokemones" : "" + " | Pokemones";
  const { front_default } = sprites.other.home;

  return loading ? (
    <Loading />
  ) : (
    <>
      <div className="detalle-pokemon">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Card className="imagen-detalle" style={{ background: "transparent" }}>
          <Card.Img variant="top" src={front_default} alt={Nombre} />
        </Card>
        <div className="informacion-detalle">
          <h1>{Nombre}</h1>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p style={{ textAlign: "start" }}>
            <strong>Descripcion:</strong> {Descripcion}
          </p>
          <p>
            <strong>Tipo:</strong>{" "}
            {tipos.map((tipo, index) => {
              return (
                <span key={tipo.tipo}>
                  {" "}
                  {index === tipos.length - 1 ? tipo.tipo : tipo.tipo + ", "}
                </span>
              );
            })}
          </p>
          <p>
            <strong>Evoluciones:</strong>{" "}
            {evoluciones.map((evo, index) => {
              return (
                <span key={evo.evolucion}>
                  {index === evoluciones.length - 1
                    ? evo.evolucion
                    : evo.evolucion + ", "}
                </span>
              );
            })}
          </p>
          <p>
            <strong>Altura:</strong> {Altura}
          </p>
          <p>
            <strong>Peso:</strong> {Peso}
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <Link to={`/`}>
            <Button variant="outline-dark">Home</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
