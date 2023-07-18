import React from 'react'
import './BookList.styles.scss'

const BookList = ({ bookList }) => {
  return (
    <div className='book-list'>
      {bookList &&
        bookList.map((book, index) => {
          const title = book.volumeInfo.title,
            author = book.volumeInfo.authors,
            thumb = book.volumeInfo.imageLinks.thumbnail,
            link = book.accessInfo.pdf.downloadLink;

            console.log(link)    
          return (
            <div key={index} className="book">
              <h2>{title}</h2>
              <a href={link} target='_blank'>
                <img src={thumb} />
              </a>
              <h3>{author}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default BookList