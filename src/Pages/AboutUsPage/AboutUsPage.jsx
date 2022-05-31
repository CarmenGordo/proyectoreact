import React, {useState} from "react";
import H1 from "../../Components/Text/Headings/H1/H1";
import Header from "../../Containers/Header/Header";
import AboutUsContainer from "./AboutUsPageStyle";

// Themes
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../../Themes/globalStyleThemes";
import { lightTheme, darkTheme } from "../../Themes/themes";

const AboutUsPage = () =>{

    // const para modificar themes
    const [theme, setTheme] = useState('light');
    const handleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return(
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
            <GlobalStyles/>
            <Header />
            <button onClick={handleTheme}>Switch Theme</button>

            <AboutUsContainer className="AboutUsContainer">

                <H1
                    className={"h1_text_cabecera"}
                    text="All about the real history"
                />

                <p
                    className={"p_text"}>
                    Sed ut perspiciatis <span>unde omnis</span> iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <span>unde omnis</span> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

                </p>
                
        
            </AboutUsContainer>

        </>
        </ThemeProvider>
    )
}

export default AboutUsPage;