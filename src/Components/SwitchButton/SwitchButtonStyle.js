import styled from 'styled-components'

export const SwitchButtonContainer = styled.label`
    background-color: red;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    border-radius: 34px;

    .slider{
        position: absolute;
        cursor: pointer;
        background-color: blue;
        -webkit-transition: .4s;
        transition: .4s;
       
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(-26px);
        -ms-transform: translateX(-26px);
        // transform: translateX(26px);
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 30px;
        width: 30px;
        // right: 5px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
      }


`;