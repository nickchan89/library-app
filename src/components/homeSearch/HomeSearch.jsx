import React from "react";
import Search from "../search/Search";
import Results from "../results/Results";
import "./HomeSearch.css";

function HomeSearch({
  setSearchField,
  setSearchDropdown,
  isLoading,
  loading,
  books,
  favouritesDataTest,
  setFavouritesDataTest,
}) {
  return (
    <div className="HomeSearch">
      <Search
        setSearchDropdown={setSearchDropdown}
        setSearchField={setSearchField}
      />
      {isLoading ? (
        <div className="HomeSearch__loading">
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <Results
          books={books}
          favouritesDataTest={favouritesDataTest}
          setFavouritesDataTest={setFavouritesDataTest}
        />
      )}
    </div>
  );
}

export default HomeSearch;
