import React from "react";
import { SwitchButtonContainer } from "./SwitchButtonStyle";

const SwitchButton = ()=>{
    return(
        <SwitchButtonContainer>
            <input 
                type="checkbox" 
            />
            
            <span 
                className="slider round"
            />
        </SwitchButtonContainer>
    )
}

export default SwitchButton;