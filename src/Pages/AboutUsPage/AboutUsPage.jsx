import React, {useState} from "react";
import H1 from "../../Components/Text/Headings/H1/H1";
import Header from "../../Containers/Header/Header";
import AboutUsContainer from "./AboutUsPageStyle";
import { Footer } from "../../Containers/Footer/Footer";

// theme
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../../Themes/globalStyleThemes";
import { lightTheme, darkTheme } from "../../Themes/themes";

const AboutUsPage = () =>{

    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
        <GlobalStyles/>
       
            <Header />

            <AboutUsContainer>

                <H1
                    className={"h1_text_cabecera"}
                    text="All about the history"
                />
                
                <div>
                    <button 
                        className="switch"
                        onClick={themeToggler}
                    >¡Discover me!</button>
                </div>

                <p
                    className={"p_text"}>

                    Hi, <span>I</span>'m Carmen, the creator of this website. I <span>have</span> created this job for a class project and initialization job with this type of language. The api used is the Rick and Morty series, which for those who haven't seen it, has become one of the best series since the year of its launch. And also, this have been <span>turned into</span> one of my favourites series. The main story tells about <span>a</span> family made up of a crazy and drunk grandfather named Rick and his grandson Morty, who adventure through the multiverse. Sometimes they are also accompanied by Summer, Morty's older sister, their mother Beth and their father Jerry. Since thanks to his inventions he does not need to go to any doctor, and as my grandmom would say " A <span>pickle</span> a day keeps the doctor away! ". 
                    <br/>
                    
                    The episodes usually start with a crazy adventure, where Rick ends up dragging <span>Morty</span> to all of them. The scenarios are set in classic movies and series, to which he refers,with a touch of humor, although sometimes with a slightly pessimistic view of life. And in general<span>,</span> all the characters have their own story that is intertwined with that of the main characters. 
                    <br />
                    <span>I'm</span> a big fan, but if I had to choose a favorite character it would be <span>Pickle Rick</span>; for that reason it is the logo of the website <span>!</span>

                    {/* I have turned into a pickle, Morty! I'm Pickle Rick! */}
                 
                </p>
                
            </AboutUsContainer>
        
            <Footer/>

            </>
    </ThemeProvider>
    )
}

export default AboutUsPage;