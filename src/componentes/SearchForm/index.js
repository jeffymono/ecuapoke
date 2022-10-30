import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./SearchForm.css";

function SearchForm({ initialKeyword = "" }) {
  const [keyword, setKeyword] = useState(initialKeyword);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (keyword !== "") navigate(`/pokemones/${keyword}`);
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit} className="SearchForm">
        <Form.Control
          type="text"
          placeholder="Buscar pokemón"
          size="sm"
          onChange={handleOnChange}
          value={keyword}
        />
        <Button variant="primary" type="submit" size="sm">
          Buscar
        </Button>
      </Form>
    </>
  );
}
export default React.memo(SearchForm);
