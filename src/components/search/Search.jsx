import React, { useState, useEffect } from "react";
import "./Search.css";

let searchPlaceholder = {
  q: "Enter the name of a book, author, subject, place or person",
  title: "Enter the name of a book",
  author: "Enter the name of an author",
  subject: "Enter a subject",
  place: "Enter the name of a place",
  person: "Enter the name of a character",
};

function Search({ setSearchField, setSearchDropdown }) {
  const [search, setSearch] = useState({ dropdown: "q", field: "" });
  const [formError, setFormError] = useState({ disabled: true, message: "" });

  useEffect(() => {
    if (search.field.length < 1) {
      setFormError({ disabled: true, message: "" });
    } else if (search.field.length < 5) {
      setFormError({
        disabled: true,
        message: "Enter at least 5 characters",
      });
    } else {
      setFormError({ disabled: false, message: "" });
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchDropdown(search.dropdown);
    setSearchField(search.field);
  };

  const handleChange = (element) => (e) => {
    setSearch({ ...search, [element]: e.target.value });
  };

  return (
    <div className="Search">
      <form className="Search__form" onSubmit={handleSubmit}>
        <div className="Search__select">
          <select onChange={handleChange("dropdown")}>
            <option value="q">All</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="subject">Subject</option>
            <option value="place">Place</option>
            <option value="person">Person</option>
          </select>
        </div>
        <div className="Search__input">
          <input
            className="Search__input__text"
            placeholder={searchPlaceholder[search.dropdown]}
            onChange={handleChange("field")}
          />
          <input
            className="Search__input__button"
            disabled={formError.disabled}
            type="submit"
          />
        </div>
      </form>
      {formError.message ? (
        <div className="Search__error">{formError.message}</div>
      ) : null}
    </div>
  );
}

export default Search;
