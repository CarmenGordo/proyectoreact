import styled from "styled-components";

const HeaderContainer = styled.header`

    font-family: 'Radio Canada';
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
        .normal{
            display: none;
        }
    }

    @media screen and (max-width: 900px) {
        .responsive{
            display: flex !important;
            background-color: red !important;
        }
    }

    .normal{
        .link-nav{
            font-size: 26px;
            color: #fff;
            text-decoration: none;
            margin-left: 30px;

            &:hover{
                font-weight: 500;
                color: #13ADC4;
                text-decoration: underline #13ADC4;
            }
        }
    }

    /* .responsive{
        display: none;
        background-color: red;
        width: 40px;
        height: 40px;
    }

    .menu_responsive{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        position: fixed;
        top: 10vh;
        0 se ve, -100% no se ve
        right: {props => (props.openResponsive ? "0" : "-100%")};
        transition: right 0.3s linear;

        @media only screen and (min-width: 624px) {
            flex-direction: row;
            position: initial;
            height: auto;
            justify-content: center;
            background: white;
        } 
    }
    */


`;

export default HeaderContainer;
