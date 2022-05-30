import styled from "styled-components";

const FormContainer = styled.form`
  
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
        font-size: 20px;
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
        min-height: 60px;
        border: none;
        border-radius: 5px;
        background-color: #C4C4C4;
        margin-bottom: 40px;
        margin-top: 15px;
    }

    input::placeholder, textarea::placeholder{
        color: white;
        padding-left: 10px;
    }
    textarea::placeholder{
        padding-top: 15px;
    }

    input:focus, textarea:focus{
        border: none;
        filter: drop-shadow(0 0 8px #13ADC4);
    }

    .submit{
        width: 100px;
        height: 80px;
        background-image: url(../../Assets/Images/logo.png);
        // background-image: url("../../../Assets/Images/logo.png");
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
        input, textarea{
            width: 340px;
        }
    }


`;

export default FormContainer;