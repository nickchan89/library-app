import React from "react";
import Results from "../results/Results";

function Favourites({ favouritesDataTest, setFavouritesDataTest }) {

  return (
    <div>
      <Results
        books={favouritesDataTest}
        favouritesDataTest={favouritesDataTest}
        setFavouritesDataTest={setFavouritesDataTest}
      />
    </div>
  );
}

export default Favourites;
