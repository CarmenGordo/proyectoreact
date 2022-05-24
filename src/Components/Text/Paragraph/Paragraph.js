import React from "react";
import ParagContainer from "./ParagraphStyle";


const Parag = ({color, text, className}) => {
    return(
        <ParagContainer
            color={color}
            className={className}>
                {text}
        </ParagContainer>
    )
};

export default Parag;