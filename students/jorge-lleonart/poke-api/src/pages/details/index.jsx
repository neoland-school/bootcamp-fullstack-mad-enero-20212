import React, { useState } from 'react';
import { useEffect } from 'react';


function Detail(Props){

    return(
        <>
            <div className="container">
                <div className="img__container">
                    <img src={Props.img2} alt="" />
                </div>
                {/* <div className="info__container">
                    <h3 className="pokemon__name">{Props.name}</h3>
                    {Props.type[0].map((e,i)=><h4 className='pokemon__type' key={i}>{e.type.name}</h4>)}
                    <h4>{Props.id}</h4>
                    
                </div> */}
            </div>
        </>
    )
}
export default Detail;