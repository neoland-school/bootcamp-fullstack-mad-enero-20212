import React, { useState } from "react";
import EmptyBox from "../emptyBox/emptyBox";
import FillBox from "../fillBox/fillBox";
import "./style.css";

function BoxContainer() {
  let [isMouseOver, updateIsmouseOver] = useState(false);
  console.log(isMouseOver);

  const handleChangeColor = () => {
    const newState = !isMouseOver;
    console.log(!isMouseOver);
    updateIsmouseOver(newState);
  };

  return (
    <div className="box_container">
      <EmptyBox handleChangeColor={handleChangeColor}></EmptyBox>
      <FillBox className={isMouseOver}></FillBox>
    </div>
  );
}

export default BoxContainer;
