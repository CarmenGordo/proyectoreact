import React from "react";
import CardsListContainer from "./CarsListStyle";
import Cards from "../../Components/Cards/Cards";
import { Children } from "react";

const CardsList = ({children}) =>{
    return(
        <CardsListContainer>
            <Cards>
                {children}
            </Cards>
        </CardsListContainer>
    )
}

export default CardsList;