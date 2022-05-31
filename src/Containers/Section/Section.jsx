import React from "react";
import SectionContainer from "./SectionStyle";

const Section = ({children}) =>{
    return(
        <SectionContainer>
            {children}
        </SectionContainer>
    )
};

export default Section;