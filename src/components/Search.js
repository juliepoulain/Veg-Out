import react, { useState } from "react";

function Search({ searchValue, setSearchValue }) {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form>
      <label>
        Search:
        <input
          name="search"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </label>
    </form>
  );
}

export default Search;
