import React from "react";

const Search = ({handleCharacterSearch}) => {
    return(
        <div className="search">
                <input  
                    type="text" 
                    placeholder="Character finder"
                    onChange={handleCharacterSearch}
                />
        </div>
    )
}

export default Search;