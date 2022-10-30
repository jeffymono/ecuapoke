import { React } from "react";
import SearchForm from "componentes/SearchForm";
import "./header.css";
import { Link } from "react-router-dom";

function Header({ initialKeyword }) {
  return (
    <div className="SearchForm-contenedor">
      <figure>
        <Link to="/">
          <img
            className="logo-pokemon"
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/09/pokemon-cronicas-arceus-2822637.jpg?itok=SnXTn4ql"
          />
        </Link>
      </figure>
      <SearchForm initialKeyword={initialKeyword} />
    </div>
  );
}
export default Header;
