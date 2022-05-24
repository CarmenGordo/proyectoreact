import React from "react";
import CardsContainer from "./CardsStyle";
// link ?
import { Link } from "react-router-dom";

const Cards = ({src, name}) => {
    return(
        <CardsContainer>
            {/* <Link> */}
                <img 
                    className="img"
                    src={src} 
                    alt="imagen de personaje" 
                />

                <div
                    className="info"
                >
                    <h3 
                        text="eee"
                        // text={name}
                    />
                </div>
    


            {/* </Link> */}
        </CardsContainer>
    )
}

export default Cards;