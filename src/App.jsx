import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Favourites from "./components/favourites/Favourites";
import HomeSearch from "./components/homeSearch/HomeSearch";
import { handleErrors } from "./utils.js";
import loading from "./loading.gif";

function App() {
  const [books, setBooks] = useState([]);
  const [favouritesDataTest, setFavouritesDataTest] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [searchDropdown, setSearchDropdown] = useState("q");
  const [isLoading, setIsLoading] = useState(false);
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current === true) {
      initialRender.current = false;
    } else {
      setIsLoading(true);
      fetch(
        `http://openlibrary.org/search.json?${searchDropdown}=${searchField}`
      )
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.docs);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, [searchField, searchDropdown]);

  return (
    <div className="App">
      <div>
        <Router>
          <nav className="App__nav">
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
          </nav>
          <Routes>
            <Route
              path="/"
              element={
                <HomeSearch
                  setSearchField={setSearchField}
                  setSearchDropdown={setSearchDropdown}
                  isLoading={isLoading}
                  loading={loading}
                  books={books}
                  favouritesDataTest={favouritesDataTest}
                  setFavouritesDataTest={setFavouritesDataTest}
                />
              }
            />
            <Route
              path="/favourites"
              element={
                <Favourites
                  favouritesDataTest={favouritesDataTest}
                  setFavouritesDataTest={setFavouritesDataTest}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
