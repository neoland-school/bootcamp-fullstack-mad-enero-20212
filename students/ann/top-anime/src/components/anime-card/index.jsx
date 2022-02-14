import "./style.css";
import React from "react";
import Rank from "../rank";


function AnimeCard(props) {
  return (
    <React.Fragment>
        <article className="anime__card">
          <img className="anime__img" src={props.image}/>
          <h1 className="anime__title">{props.title}</h1>
          <Rank className="anime__rank" rank={props.rank}></Rank>
          {/* <button className="anime__button__info"></button> */}
        </article>
    </React.Fragment>
  )
}

export default AnimeCard;