import styled from "styled-components";
import { lightTheme, darkTheme } from "../../Constants/Colors";


const HomeContainer = styled.section`
    min-height: 300px;
    background: ${(props) => props.theme === 'light' ? lightTheme.white : darkTheme.white };

`;

export default HomeContainer;