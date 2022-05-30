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

                    Hi, <span>I</span>'m Carmen, the creator of this website. I <span>have</span> created this job in react.
                    This job was created for a class and initialization job with this type of language.
The api used is the Rick and Morty series, which for those who haven't seen it, has become one of the best series since the year of its launch.

                    I have turned into a pickle, Morty! I'm Pickle Rick!

                    se ha convertido 
                    have turned 

                    turned: girar

                    turned down: rechazar

                    turned on: ,encender

                    turned off: ,encender


                    into:

                    

                    pickle: 
                    A <span>pickle</span> a day keeps the doctor away!

                    In my opinion one of the most interesting character is <span>Pickle Rick</span>.

                </p>
                
            </AboutUsContainer>
        
        </>
    )
}

export default AboutUsPage;