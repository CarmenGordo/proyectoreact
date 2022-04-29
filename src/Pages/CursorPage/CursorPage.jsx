import React from "react";
import H1 from "../../Components/Text/Headings/H1/H1";
import Parag from "../../Components/Text/Paragraph/Paragraph";
// style
import PageCursorContainer from "./CursorPageStyle";
import imgCabecera from "../../Assets/Images/img-cabecera-fondo.png"
// font
// import * as Font from 'expo-font';

const CursorPage = () =>{
    return(
        <PageCursorContainer>
            <H1 
                text="Welcome to Rick and Morty World"
                className="h1-text"
            />
            <Parag
                color="white"
                text="Please choose a character cursor"
            />
            <img src={imgCabecera} className="img-cabecera" alt="imagen rick y morty cabecera" />
            
        </PageCursorContainer>
    )
}

export default CursorPage;