import React from "react";
import "./ResultsCard.css";
import FavouritesIcon from "../favouritesIcon/FavouritesIcon";

function ResultsCard({
  book,
  favouritesDataTest,
  setFavouritesDataTest,
}) {
  return (
    <div className="results__card">
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : `https://p.kindpng.com/picc/s/494-4945860_cartoon-book-with-blank-cover-printable-blank-book.png`
        }
      />
      <div className="results__card__text">
        <h4>{book.title}</h4>
        <div>{book.author_name ? book.author_name.join(", ") : null}</div>
        <div>{book.first_publish_year}</div>
        <div>
          <FavouritesIcon
            book={book}
            favouritesDataTest={favouritesDataTest}
            setFavouritesDataTest={setFavouritesDataTest}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultsCard;
