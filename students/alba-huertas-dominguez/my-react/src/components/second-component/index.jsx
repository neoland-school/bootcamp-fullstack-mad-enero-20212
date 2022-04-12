import HelloWord from "../first-component";
import React from "react";

function Lorem(){

    return(
        <React.Fragment>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
        <HelloWord></HelloWord>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
        </React.Fragment>

    )


}

export default Lorem;