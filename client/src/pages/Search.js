import React, { useEffect, useState } from "react";
import "../asset/css/search.css";
import { NavLink } from "react-router-dom";

function Search() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query) {
      fetchBooks();
    }
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchBooks();
    }
  };

  const fetchBooks = async () => {
    if (!query.trim()) return;

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      if (!response.ok) {
        console.error("Failed to fetch search results:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log(data); // Log data to inspect the response structure

      if (data.items && Array.isArray(data.items)) {
        setBooks(data.items.slice(0, 3).map((item) => item.volumeInfo));
      } else {
        setBooks([]);
        console.warn("No books found with that query.");
      }
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  const handleSearch = () => {
    fetchBooks();
  };

  return (
    <div id="Search">
      <div style={{ textAlign: "center" }} className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <svg
          onClick={handleSearch}
          className="search-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
        </svg>
      </div>
      <div className="card-container">
        {books.length > 0 ? (
          books.map((data, index) => (
            <div key={index} className="card">
              <div className="card-image">
                {data.imageLinks && data.imageLinks.thumbnail && (
                  <img src={data.imageLinks.thumbnail} alt={data.title} />
                )}
                <i className="fas fa-book book-icon"></i>
              </div>
              <div className="card-content">
                <h2>{data.title}</h2>
                <p>FREE</p>
                {data.previewLink && (
                  <NavLink to={`/viewbook/${data.title}`}>
                    <a
                      href={data.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-button"
                    >
                      View Book <i className="fa-solid fa-right-long"></i>
                    </a>
                  </NavLink>
                )}
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#FF0000", fontSize: "21px", fontWeight: "600" }}>
            No books found. Try searching for something else.
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
