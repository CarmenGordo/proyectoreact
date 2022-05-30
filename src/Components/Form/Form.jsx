import React, {useState} from "react";
import FormContainer from "./FormStyle";
const Form = (name, surname, classForm) => {

    const [form, setForm] = useState({})

    const handleForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const showForm = (e) =>{
        e.preventDefault()
        console.log(form)
    }

    return(
        <FormContainer>
            <form>
                <div>
                    <label htmlFor="">Tell us your name:</label>
                    <input 
                        type="text"
                        className={classForm}
                        placeholder="Name"
                        name="name"
                        onBlur={handleForm}
                        
                    />
                </div>
                
                <div>
                    <label htmlFor="">And your Netflix account..., sorry your e-mail:</label>
                    <input 
                        type="text"
                        className={classForm}
                        placeholder="E-mail"
                        name="email"
                        onBlur={handleForm}

                    />
                </div>

                <div>
                    <label htmlFor="">What do you think about pirates of the pancreas?:</label>
                    <textarea
                        className={classForm}
                        placeholder= "Message"
                        name="message"
                        onBlur={handleForm}
                    />
                </div>

                <div className="button_submit">
                    <input
                        className="submit"
                        type="submit"
                        value="Send"
                        onClick={showForm}
                    />
                </div>

            </form>

        </FormContainer>
    )
}

export default Form;