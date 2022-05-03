import React from "react";
// style
import H1Container from "./H1Style";


const H1 = ({text, className}) => {
    return(
        <H1Container
            className={className}
        >
            {text}
        </H1Container>
    )
};

export default H1;