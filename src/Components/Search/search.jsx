import React from "react";

const CharactersFilter = ({ handleCharacterFilter }) => {
    return (
      <div>
        <input onChange={handleCharacterFilter} placeholder="Character finder"/>
      </div>
    )
  }

export default CharactersFilter;