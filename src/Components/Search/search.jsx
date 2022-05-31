import React from "react";
import { CharactersFilterContainer } from "./SearchStyle";

const CharactersFilter = ({ handleCharacterFilter }) => {
    return (
      <CharactersFilterContainer>

        <input
          className="search" 
          onChange={handleCharacterFilter} 
          placeholder="Search character"
        />

      </CharactersFilterContainer>

    )
  }

export default CharactersFilter;