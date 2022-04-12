import React, { useEffect, useState } from "react";
import CocktailCards from "../cocktails-cards/cocktailsCards";
import Header from "../header/header";
import "./style.css";

function OrdinaryDrinks() {
  const [ordinaryDrinks, updateOrdinaryDrinks] = useState([]);

  // useEffect(() => {
  //   const getOrdinaryDrinks = async () => {
  //     const results = await fetch(
  //       "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
  //     );
  //     const data = await results.json();
  //     console.log(data);
  //     return data;
  //   };
  //   getOrdinaryDrinks();
  // }, [ordinaryDrinks]);

  return (
    <React.Fragment>
      <Header></Header>
      <div>
        <p>OrdinaryDrinks</p>
        <CocktailCards></CocktailCards>
      </div>
    </React.Fragment>
  );
}

export default OrdinaryDrinks;
