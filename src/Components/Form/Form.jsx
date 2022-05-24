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
                    <label htmlFor="">Name</label>
                    <input 
                        type="text"
                        className={classForm}
                        placeholder="Name"
                        name="name"
                        onBlur={handleForm}
                        
                    />
                </div>
                
                <div>
                    <label htmlFor="">Email</label>
                    <input 
                        type="text"
                        className={classForm}
                        placeholder="E-mail"
                        name="email"
                        onBlur={handleForm}

                    />
                </div>

                <div>
                    <label htmlFor="">Please write the message</label>
                    <textarea
                        className={classForm}
                        placeholder= "Message"
                        name="message"
                        onBlur={handleForm}
                    />
                </div>

                <input
                    className="submit"
                    type="submit"
                    value="Send"
                    onClick={showForm}
                />

            </form>

        </FormContainer>
    )
}

export default Form;