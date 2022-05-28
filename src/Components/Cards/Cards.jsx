import React from "react";
import CardsContainer from "./CardsStyle";
// link ?
import { Link } from "react-router-dom";

const Cards = ({src, name}) => {
    return(
        <CardsContainer>
            {/* <Link> */}
                <img 
                    className="img_character"
                    src={src} 
                    alt="imagen de personaje" 
                />

                <div
                    className="info_character">
                    {/* <h3>
                        text="eee"
                        text={name}
                    </h3> */}

                    <ul>
                        <li>
                            text="eee"
                        </li>
                    </ul>
                        
                   
                </div>

            {/* </Link> */}
        </CardsContainer>
    )
}

export default Cards;