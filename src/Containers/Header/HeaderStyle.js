import styled from "styled-components";

const HeaderContainer = styled.header`
    width: 100%;
    max-height: 150px;
    padding: 5px 45px;
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid 1px black;
    color: white;
    a{
        margin-left: 15px;
        color: red;
    }
`;

export default HeaderContainer;