import React from "react";
import CardsContainer from "./CardsStyle";
// link ?

const Cards = ({children}) => {
    return(
        <CardsContainer>
            {children}
        </CardsContainer>
    )
}

export default Cards;