import React, { useEffect, useState } from "react";
import CocktailCards from "../cocktails-cards/cocktailsCards";
import Header from "../header/header";
import "./style.css";

function Cocktails() {
  const [cocktails, updateCocktails] = useState([]);

  // useEffect(() => {
  //   const getCocktails = async () => {
  //     const results = await fetch(
  //       "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  //     );
  //     const data = await results.json();
  //     console.log(data);
  //     return data;
  //   };
  //   getCocktails();
  // }, [cocktails]);

  return (
    <React.Fragment>
      <Header></Header>
      <div>
        <p>Cocktail</p>
        <CocktailCards></CocktailCards>
      </div>
    </React.Fragment>
  );
}

export default Cocktails;
