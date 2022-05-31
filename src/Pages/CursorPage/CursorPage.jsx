import React from "react";
import H1 from "../../Components/Text/Headings/H1/H1";
import Parag from "../../Components/Text/Paragraph/Paragraph";
// style
import PageCursorContainer from "./CursorPageStyle";
import imgCabecera from "../../Assets/Images/img-cabecera-fondo.png"
import ImgCursor from "../../Components/ImgCursor/ImgCursor";
// font
// import * as Font from 'expo-font';
// dark cursor
import cursorDarkRick from "../../Assets/Images/rick_cursor_dark.png";
import cursorDarkMorty from "../../Assets/Images/morty_cursor_dark.png";
import cursorDarkBeth from "../../Assets/Images/beth_cursor_dark.png";
import cursorDarkSummer from "../../Assets/Images/summer_cursor_dark.png";
import cursorDarkJerry from "../../Assets/Images/jerry_cursor_dark.png";


const CursorPage = () =>{
    return(
        <PageCursorContainer>
            <H1 
                text="Welcome to Rick and Morty World"
                className="h1-cursor"
            />
            <Parag
                color="white"
                className ="p-cursor"
                text="Please choose a character cursor"
            />
            <img src={imgCabecera} className="img-cabecera" alt="imagen rick y morty cabecera" />
            
            <ImgCursor 
                className="cursor-rick"
                src={cursorDarkRick}
            />

            <ImgCursor 
                className="cursor-morty"
            />

            <ImgCursor 
                className="cursor-beth"
            />

            <ImgCursor 
                className="cursor-summer"
            />

            <ImgCursor 
                className="cursor-jerry"
            />
            
        </PageCursorContainer>
    )
}

export default CursorPage;