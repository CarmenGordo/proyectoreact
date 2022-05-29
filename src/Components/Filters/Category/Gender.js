import React from "react";

export const Gender = () =>{
    return(
        <>
        <p>
            Gender
        </p>

        <select
            label="Gender"
        >
            <option 
                value="Male"
                label="Male"
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