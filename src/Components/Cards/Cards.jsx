import React from "react";
import CardsContainer from "./CardsStyle";

import { Link } from "react-router-dom";


const Cards = ({id, src, name, status}) => {

    return(
        <CardsContainer>
            <Link to={`/${name}`}>
            {
                (() => {

                if(id <= 5){
                    return (
                        <div className="principal">
                            <div className="container_card">
                                <img 
                                    className="img_character"
                                    src={src} 
                                    alt="imagen de personaje" 
                                />
                                <div className="name_character">
                                    <h3>{name}</h3>
                                </div>
                            </div>
                        </div>
                    );

                } else if (status === "Dead") {
                    return (
                    <div className="dead">
                        <div className="container_card">
                            <img 
                                className="img_character"
                                src={src} 
                                alt="imagen de personaje" 
                            />
                            <div className="name_character">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    </div>

                    );
                } else if (status === "Alive") {
                    return (
                        <div className="alive">
                        <div className="container_card">
                            <img 
                                className="img_character"
                                src={src} 
                                alt="imagen de personaje" 
                            />
                            <div className="name_character">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    </div>
                    );
                } else {
                    return (
                        <div className="missing">
                        <div className="container_card">
                            <img 
                                className="img_character"
                                src={src} 
                                alt="imagen de personaje" 
                            />
                            <div className="name_character">
                                <h3>{name}</h3>
                            </div>
                        </div>
                    </div>
                    );
                }
                })()
            }  


            </Link>
        </CardsContainer>
    )
}

export default Cards;