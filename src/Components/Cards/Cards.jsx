import React from "react";
import CardsContainer from "./CardsStyle";
// link ?
import { Link } from "react-router-dom";

const Cards = ({src, name, status}) => {

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
                   
                    {
                        (() => {
                        if (status === "Dead") {
                            return (
                            <li className="dead">
                               
                                {name}
                            </li>
                            );
                        } else if (status === "Alive") {
                            return (
                            <li className="alive">
                             
                                {name}
                            </li>
                            );
                        } else {
                            return (
                            <li
                                className="missing"
                            >
                                {name}
                            </li>
                            );
                        }
                        })()
                    }       
                </div>

            {/* </Link> */}
        </CardsContainer>
    )
}

export default Cards;