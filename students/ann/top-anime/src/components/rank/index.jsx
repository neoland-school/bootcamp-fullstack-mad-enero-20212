import React from "react";
import "./style.css";

function Rank(props) {
  return (
    <React.Fragment>
      <div class="anime__rank__container">
        <p>{props.rank}</p>
      </div>
    </React.Fragment>
  )
}

export default Rank;