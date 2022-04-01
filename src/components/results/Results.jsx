import React, { useEffect, useState } from "react";
import LoadMore from "../loadMore/LoadMore";
import ResultsCard from "../resultsCard/ResultsCard";
import "./Results.css";

function Results({ books, favouritesDataTest, setFavouritesDataTest }) {
  const [numResults, updateNumResults] = useState(10);

  const loadMore = () => {
    updateNumResults(numResults + 10);
  };

  useEffect(() => {
    updateNumResults(10);
  }, [books]);

  return (
    <div className="Results">
      <div className="Results__grid">
        {books.slice(0, numResults).map((book) => {
          return (
            <ResultsCard
              book={book}
              key={book.key}
              favouritesDataTest={favouritesDataTest}
              setFavouritesDataTest={setFavouritesDataTest}
            />
          );
        })}
      </div>
      <LoadMore loadMore={loadMore} books={books} numResults={numResults} />
    </div>
  );
}

export default Results;
