import styled from "styled-components";

const ParagContainer = styled.p`
    font-size: 18px;
    color: ${(props) => props.color};

    &.p-cursor{
        z-index: 1;
        position: relative;
        top: 100px
    }
`;

export default ParagContainer;