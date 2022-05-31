import styled from "styled-components";

const FormContainer = styled.form`
  
    display: flex;
    justify-content: center;
    align-item: center;
    flex-flow: row wrap;
    padding-top: 26px;

    div{
        display: flex;
        justify-content: center;
        align-item: center;
        flex-flow: column wrap;
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
    }


    .submit{
        width: 100px;
        height: 80px;
        background-image: url(../../Assets/Images/logo.png);
        // background-image: url("../../../Assets/Images/logo.png");
        // background-color: red;
        color: white;
        border:none;
        
    }

`;

export default FormContainer;