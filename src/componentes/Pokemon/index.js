import React from "react";
import { Link } from "react-router-dom";
import "./Pokemon.css";
import { Button, Card } from "react-bootstrap";

function Pokemon({ nombre, descripcion, imagen, url, PokemonID }) {
  return (
    <div className="Pokemon">
      <Card
        key={nombre}
        className="pokemon-card"
        style={{ background: "transparent" }}
      >
        <Card.Img variant="top" src={imagen} alt={nombre} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text className="pokemon-descripcion">{descripcion}</Card.Text>
          <Link to={`/detalle/${PokemonID}`}>
            <Button variant="primary" size="md">
              Ver detalles
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default React.memo(Pokemon, (prevProps, nextProps) => {
  return prevProps.PokemonID === nextProps.PokemonID;
});
