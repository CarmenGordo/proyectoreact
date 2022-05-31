import React from "react";

export const Species = () =>{
    return(
        <>
        <p>Species</p>

        <select
            label="Species"
        >
            <option 
                value="Human"
                label="Human"
            />

            <option 
                value="Female"
                label="Female"
            />

            <option 
                value="Genderless"
                label="Genderless"
            />

            <option 
                value="unknown"
                label="Unknown"
            />
        </select>
        </>
    )
}