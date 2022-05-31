import styled from "styled-components";

export const CharactersFilterContainer = styled.div`
    
    .search{
        background-color: #858585;
        min-height: 30px;
        border-radius: 5px;
        border: solid 2px #13ADC4;
  
        &:focus{
            border: none;
            background-color: #13ADC4;
            filter: drop-shadow(0 0 8px #F8F641);
        }

        &::placeholder{
            color: white;
        }
    }
`;

