import React from "react";
import "./LoadMore.css";

function LoadMore({ loadMore, books, numResults }) {
  if (books.length > 0 && books.length > numResults) {
    return (
      <div>
        <button onClick={loadMore}>Load more</button>
      </div>
    );
  } else {
    return null;
  }
}

export default LoadMore;
