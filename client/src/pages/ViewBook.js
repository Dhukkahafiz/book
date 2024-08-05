import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import "../asset/css/viewBook.css"
import "../asset/css/Most_useful.css"
import "../asset/css/viewBook.css"


const ViewBook = () => {
    const [book, setBook] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchBook1(id);
    }, [id]);

    const fetchBook1 = async (title) => {
        try {
            const response = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${title}`
            );
            if (!response.ok) {
                console.error("Failed to fetch search results:", response.statusText);
                return;
            }

            const data = await response.json();
            if (data.items && data.items.length > 0) {
                const bookData = data.items[0].volumeInfo; // Changed to 0 for the first book
                setBook(bookData);
            } else {
                setBook(null);
                console.warn("No book found with that query.");
            }
        } catch (error) {
            console.error("Error fetching book data:", error);
        }
    };

    if (!book) {
        return <div>No book found.</div>;
    }


    const truncateString = (str, maxLength) => {
        if (str && str.length > maxLength) {
            return str.substring(0, maxLength) + '...';
        } else {
            return str;
        }
    };

    return (
        <>
            {/* <div>
                <h1>{book.title}</h1>
                <p>{book.description}</p>
                {book.imageLinks && (
                    <img src={book.imageLinks.thumbnail} alt={book.title} />
                )}
            </div>
            */}


            <div className='mainvewpage' >
                <div className='chaildvewpage'>{book.imageLinks && (
                    <img src={book.imageLinks.thumbnail} alt={book.title} />
                )}</div>
                <div className='chaildvewpage'><h3>{book.title}</h3><p>{truncateString(book.description, 900)}</p>
                    <div className="card-content">
                        <>
                            {book.previewLink && (
                                <a
                                    href={book.previewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-button"
                                    style={{ marginLeft: "-20px" }}

                                >
                                    View book <i class="fa-solid fa-right-long"></i>
                                </a>

                            )}
                        </>
                    </div>
                </div>

            </div>
        </>

    );
};

export default ViewBook;
