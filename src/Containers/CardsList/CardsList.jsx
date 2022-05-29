import React from "react";
import CardsListContainer from "./CarsListStyle";

const CardsList = ({children}) =>{
    return(
        <CardsListContainer>
    
            {children}
          
        </CardsListContainer>
    )
}

export default CardsList;