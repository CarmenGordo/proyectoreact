import React from "react";
import { CharactersFilterContainer } from "./SearchStyle";

const CharactersFilter = ({ handleChange, reference }) => {
    return (
      <CharactersFilterContainer>

        <input
          ref={reference}
          className="search" 
          onChange={handleChange} 
          placeholder="Search character"
        />

      </CharactersFilterContainer>

    )
  }

export default CharactersFilter;