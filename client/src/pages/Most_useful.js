



import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../asset/css/Most_useful.css";
import { NavLink } from "react-router-dom";
function Most_useful() {
  useEffect(() => {
    fetchBook();
    fetchBook1();
    fetchBook2();

    fetchBook3();
    // savedState()
    
  }, []);
  const savedState = localStorage.getItem('appState');
  const [book, setBook] = useState(null);
  const [paythone, setpaythone] = useState(null);
  const [c, setc] = useState(null);
  const [java, setjava] = useState(null);

  console.log(savedState+"hello");

  console.log(book);
  const fetchBook1 = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${"dbms"}`
      );
      if (!response.ok) {
        console.error("Failed to fetch search results:", response.statusText);
        return;
      }

      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const bookData = data.items[5].volumeInfo;
        setBook(bookData);
      } else {
        setBook(null);
        console.warn("No book found with that query.");
      }
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };
  const fetchBook2 = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${"phyton"}`
      );
      if (!response.ok) {
        console.error("Failed to fetch search results:", response.statusText);
        return;
      }

      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const bookData = data.items[2].volumeInfo;
        setpaythone(bookData);
      } else {
        setpaythone(null);
        console.warn("No book found with that query.");
      }
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  const fetchBook3 = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${"c"}`
      );
      if (!response.ok) {
        console.error("Failed to fetch search results:", response.statusText);
        return;
      }

      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const bookData = data.items[1].volumeInfo;
        setc(bookData);
      } else {
        setc(null);
        console.warn("No book found with that query.");
      }
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  const fetchBook = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${"java"}`
      );
      if (!response.ok) {
        console.error("Failed to fetch search results:", response.statusText);
        return;
      }

      const data = await response.json();
      if (data.items && data.items.length > 0) {
        const bookData = data.items[0].volumeInfo;
        setjava(bookData);
      } else {
        setjava(null);
        console.warn("No book found with that query.");
      }
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  return (
    <>
      <div></div>
      <div className="Most_main_page" id="services">
        <div className="Most_header_page">
          <h1> 
            <span>M</span>ost <span>U</span>seful <span>B</span>ook
          </h1>
        </div>
        <div className="main_books_div">
          {book && (
            <div className="books_box">
              <div class="panel__image">
                <a href="#" class="books_book_image">
                  <div class="books_book_img">
                    {book.imageLinks && (
                      <img src={book.imageLinks.thumbnail} alt={book.title} />
                    )}
                  </div>
                </a>
              </div>
              <div className="books_details">
                <h4>{book.title}</h4>
                <p>FREE</p>
                <button>
                  {book.previewLink && (
                    <NavLink to={`/viewbook/${book.title}`}>
                      <a
                        href={book.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View book <i class="fa-solid fa-right-long"></i>
                      </a>
                    </NavLink>
                  )}
                </button>
              </div>
            </div>
          )}

          {c && (
            <div className="books_box shortbox">
              <div class="panel__image">
                <a href="#" class="books_book_image">
                  <div class="books_book_img">
                    {c.imageLinks && (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv3wrnpjirODZEcYkB7AdXcW3h4s3PFcMKuw&s"
                        alt={c.title}
                      />
                    )}
                  </div>
                </a>
              </div>
              <div className="books_details">
                <h4>{c.title}</h4>
                <p>FREE</p>
                <button>
                  {c.previewLink && (
                    <NavLink to={`/viewbook/${c.title}`}>                    <a
                      href={c.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View book <i class="fa-solid fa-right-long"></i>
                    </a>
                    </NavLink>

                  )}
                </button>
              </div>
            </div>
          )}

          {paythone && (
            <div className="books_box " >
              <div class="panel__image">
                <a href="#" class="books_book_image">
                  <div class="books_book_img">
                    {paythone.imageLinks && (
                      <img
                        src={paythone.imageLinks.thumbnail}
                        alt={paythone.title}
                      />
                    )}
                  </div>
                </a>
              </div>
              <div className="books_details">
                <h4>{paythone.title}</h4>
                <p>FREE</p>
                <button>
                  {paythone.previewLink && (
                    <NavLink to={`/viewbook/${paythone.title}`}>                    

                    <a
                      href={paythone.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View book <i class="fa-solid fa-right-long"></i>
                    </a>
                    </NavLink>
                  )}
                </button>
              </div>
            </div>
          )}
          {java && (
            <div className="books_box shortbox" >
              <div class="panel__image">
                <a href="#" class="books_book_image">
                  <div class="books_book_img">
                    {java.imageLinks && (
                      <img
                        src="https://m.media-amazon.com/images/I/81BROimNPvL.AC_UF1000,1000_QL80.jpg"
                        alt={java.title}
                      />
                    )}
                  </div>
                </a>
              </div>
              <div className="books_details">
                <h4>{java.title}</h4>
                <p>FREE</p>
                <button>
                  {java.previewLink && (
                    <NavLink to={`/viewbook/${java.title}`}>                    

                    <a
                      href={java.previewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View book <i class="fa-solid fa-right-long"></i>
                    </a>
                    </NavLink>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Most_useful;
