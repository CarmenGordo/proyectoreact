import React from "react";
import H1 from "../../Components/Text/Headings/H1/H1";
import Header from "../../Containers/Header/Header";
import AboutUsContainer from "./AboutUsPageStyle";

const AboutUsPage = () =>{
    return(
        <>
            <Header />

            <AboutUsContainer>

                <H1
                    className={"h1_text_cabecera"}
                    text="All about the history"
                />

                <p
                    className={"p_text"}>

Hi, <span>I</span>'m Carmen, the creator of this website. I <span>have</span> created this job in react

                    I've turned into a pickle, Morty! I'm Pickle Rick!

                </p>
                
        
            </AboutUsContainer>
        
        </>
    )
}

export default AboutUsPage;