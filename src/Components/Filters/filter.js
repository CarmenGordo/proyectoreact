import React from "react";
import { FiltersContainer } from "./filterStyle";
import { Gender } from "./Category/Gender";
import { Species } from "./Category/Species";

const Filters = () =>{
    return(
        <FiltersContainer className="filtros">
            <h4>
                Filters by:
            </h4>

            {/* borrar filters */}
            <p>
                Clean filters
            </p>

            <Gender
            />

            <Species
            />

            
        </FiltersContainer>
    )
}

export default Filters