import styled from "styled-components";

const FormContainer = styled.form`

    font-family: 'Radio Canada';
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    padding-top: 26px;
    

    div{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-flow: column wrap;
    }

    label{
        font-size: 22px;
        color: white;
    }

    input{
        width: 550px;
        min-height: 60px;
        border: none;
        border-radius: 5px;
        background-color: #C4C4C4;
        margin-bottom: 40px;
        margin-top: 15px;
    }

    textarea{
        width: 550px;
        min-height: 100px;
        border: none;
        border-radius: 5px;
        background-color: #C4C4C4;
        margin-bottom: 40px;
        margin-top: 15px;
    }

    input::placeholder, textarea::placeholder{
        font-family: 'Radio Canada';
        color: white;
        padding-left: 10px;
    }
    textarea::placeholder{
        padding-top: 15px;
    }

    input:focus, textarea:focus{
        font-family: 'Radio Canada';
        border: none;
        filter: drop-shadow(0 0 8px #13ADC4);
    }

    .submit{
        /* background-image: url(${require(`../../Assets/Images/logo.png`)});
        background-size: cover;
        background-position-y: 10px; */
        background-color: #13ADC4;
        font-family: 'Radio Canada';
        width: 80px;
        height: 60px;
        color: white;
        border:none;

        &:focus{
            filter: none;
        }
    }

    @media screen and (max-width: 900px) {
        input, textarea{
            width: 450px;
        }
       
    }

    @media screen and (max-width: 500px) {
        /* text-align: center; */
        input, textarea{
            width: 400px;
        }
    }

    @media screen and (max-width: 375px) {
        input, textarea{
            width: 300px;
        }
    }


`;

export default FormContainer;