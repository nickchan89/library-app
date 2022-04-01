import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "./FavoritesIcon.css";

function FavouritesIcon({ book, favouritesDataTest, setFavouritesDataTest }) {
   const handleClick = (e) => {
    if (!favouritesDataTest.includes(book)) {
      setFavouritesDataTest((prevFavouritesDataTest) => [
        ...prevFavouritesDataTest,
        book,
      ]);
    } else if (favouritesDataTest.includes(book)) {
      setFavouritesDataTest((prevFavourites) =>
        prevFavourites.filter((favBook) => favBook !== book)
      );
    }

  };

  return (
    <div>
      <div onClick={handleClick}>
                {favouritesDataTest.includes(book) ? (
          <StarIcon className="icon" color="primary" />
        ) : (
          <StarBorderIcon className="icon" />
        )}
      </div>
    </div>
  );
}

export default FavouritesIcon;
