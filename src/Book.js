import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

    update(shelf) {
        BooksAPI.update(this.props.book, shelf)
          .then(() => {
            let book = this.props.book
            book.shelf = shelf
            this.props.onUpdate(book)
          })
    }

    render() {
        const { book } = this.props
        return (
            <li>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => this.update(event.target.value)}>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                    </div>
                  </div>
                </div>
            </li>
        )
    }
}

export default Book
