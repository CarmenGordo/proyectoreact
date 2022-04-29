import React from "react";
import ParagContainer from "./ParagraphStyle";


const Parag = ({color, text}) => {
    return(
        <ParagContainer
            color={color}>
                {text}
        </ParagContainer>
    )
};

export default Parag;