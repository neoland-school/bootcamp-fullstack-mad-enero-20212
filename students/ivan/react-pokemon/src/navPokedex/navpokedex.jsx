import React from "react";
import "./style.css";

function NavPokedex({ HandleFiltered }) {
  return (
    <React.Fragment>
      <header className="header">
        <h2 className="tittle">POKÉDEX !</h2>
      </header>
      <section className="search_area">
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search Pokemon"
          onKeyUp={HandleFiltered}
        />
      </section>
    </React.Fragment>
  );
}

export default NavPokedex;
