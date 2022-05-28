import styled from "styled-components";
import { lightTheme, darkTheme } from "../../Constants/Colors";

const HeaderContainer = styled.header`
    height: 90px;
    max-height: 92px;
    padding: 5px 45px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px black;
    color: white;

    @media screen and (max-width: 900px) {
        .link-nav{
            color: red;
        }
    }

    .link-nav{
        font-size: 26px;
        color: #fff;
        text-decoration: none;
        margin-left: 15px;

        &:hover{
            font-weight: 500;
            // color: #13ADC4;
            // text-decoration: underline #13ADC4;
            color: ${(props) => props.theme === 'light' ? lightTheme.black : darkTheme.black}
            // text-decoration: underline {(props) => props.theme === 'light' ? lightTheme.letters : darkTheme.letters};
        }
    }

    span{
        cursor: pointer;
    }

`;

export default HeaderContainer;
