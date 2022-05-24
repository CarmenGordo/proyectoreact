import React from "react";
import ContactPageContainer from "./ContactPageStyle";
import Header from "../../Containers/Header/Header";
import H1 from "../../Components/Text/Headings/H1/H1";
import Form from "../../Components/Form/Form";

const ContactPage = () => {
    return(
        <>
            <Header />
            <ContactPageContainer>

                <H1
                    className={"h1_text_cabecera"}
                    text="Do you have any information about Evil Morty? Contact us"
                />

                {/* form */}
                <Form>
                    
                </Form>


            </ContactPageContainer>
        </>
        
    )
}

export default ContactPage;